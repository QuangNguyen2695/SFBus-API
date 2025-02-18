import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { CreateBookingDto } from './dto/create-booking.dto';
import { BookingDocument } from './schema/booking.schema';
import { plainToInstance } from 'class-transformer';
import { BookingDto } from './dto/booking.dto';
import { BusScheduleTemplateService } from '@/module/bus/bus-schedule-template/bus-schedule-template.service';
import { BusScheduleService } from '@/module/bus/bus-schedule/bus-schedule.service';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { customAlphabet } from 'nanoid';
import { CounterService } from '@/module/counter/counter-service';

@Injectable()
export class BookingService {

  private alphabet = process.env.ALPHABET || 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  private nanoid = customAlphabet(this.alphabet, 6);

  constructor(
    @InjectModel(BookingDocument.name) private readonly bookingModel: Model<BookingDocument>,
    private readonly busScheduleTemplateService: BusScheduleTemplateService,
    private readonly busScheduleService: BusScheduleService,
    private readonly counterService: CounterService
  ) { }

  async create(createBooking: CreateBookingDto): Promise<BookingDto> {
    if (!createBooking) {
      throw new NotFoundException('createBooking not found');
    }

    const createBookingModel = new this.bookingModel({
      ...createBooking,
      status: 'pending',
      bookingNumber: this.generateBookingNumber(),
      totalPrice: 0,
      paymentTime: new Date(Date.now() + 10 * 60 * 1000) // 10 minutes from now
    });

    const bookingPromises = createBookingModel.bookingItems.map(async (booking) => {
      const busSchedule = await this.busScheduleService.findOne(booking.busScheduleId);
      busSchedule.remainSeat -= booking.seats.length;

      createBookingModel.totalPrice += booking.price;

      const updateBusScheduleResult = await this.busScheduleService.update(busSchedule._id, busSchedule);
      if (!updateBusScheduleResult) {
        throw new NotFoundException('Update bus schedule failed');
      }

      const updateSeatStatusResult = await this.busScheduleTemplateService.updateSeatStatus(busSchedule.busScheduleTemplateId, booking.seats, 'booked');
      if (!updateSeatStatusResult) {
        throw new NotFoundException('Update seats failed');
      }

      booking.seats = await Promise.all(booking.seats.map(async (seat: any) => {
        const seatNumber = await this.counterService.getNextSeatNumber();
        return {
          ...seat,
          seatNumber, // Use the auto-incrementing seat number
        };
      }));

      return booking;
    });

    await Promise.all(bookingPromises);
    await createBookingModel.save();

    return plainToInstance(BookingDto, createBookingModel.toObject());
  }

  async update(id: string, updateBookingDto: UpdateBookingDto): Promise<BookingDto> {
    const updateBooking = await this.bookingModel.findByIdAndUpdate(id, updateBookingDto, { new: true }).exec();
    if (!updateBooking) {
      throw new NotFoundException(`payment with ID "${id}" not found.`);
    }
    return plainToInstance(BookingDto, updateBooking.toObject());
  }

  async cancelBooking(userId: Types.ObjectId, bookingId: Types.ObjectId): Promise<boolean> {

    const booking = await this.bookingModel.findOne({ userId, _id: bookingId }).lean().exec();
    if (!booking) {
      throw new NotFoundException(`Booking with ID "${bookingId}" not found.`);
    }

    const bookingPromises = booking.bookingItems.map(async (bookingItem) => {

      // Update bus schedule
      const busSchedule = await this.busScheduleService.findOne(bookingItem.busScheduleId);
      busSchedule.remainSeat += bookingItem.seats.length;

      const updateBusScheduleResult = await this.busScheduleService.update(busSchedule._id, busSchedule);
      if (!updateBusScheduleResult) {
        throw new NotFoundException('Update bus schedule failed');
      }

      // Update seat status
      const updateSeatStatusResult = await this.busScheduleTemplateService.updateSeatStatus(busSchedule.busScheduleTemplateId, bookingItem.seats, 'available');
      if (!updateSeatStatusResult) {
        throw new NotFoundException('Update seats failed');
      }

      await this.bookingModel.findByIdAndDelete(bookingId).exec();
    });

    await Promise.all(bookingPromises);
    return true;
  }

  async findAll(): Promise<BookingDto[]> {
    const bookings = await this.bookingModel.find().lean().exec();
    return plainToInstance(BookingDto, bookings);
  }

  async findOne(id: string): Promise<BookingDto> {
    const booking = await this.bookingModel.findById(id).lean().exec();
    return plainToInstance(BookingDto, booking);
  }

  async deleteOne(id: string): Promise<boolean> {
    const result = await this.bookingModel.findByIdAndDelete(id).exec();
    return result !== null;
  }

  async findAllByUser(userId: string): Promise<BookingDto[]> {
    const bookingModel = await this.bookingModel.find({ userId }).lean().exec();

    const bookings = plainToInstance(BookingDto, bookingModel);

    if (!bookings) {
      return [];
    }

    const bookingPromises = bookings.map(async (booking) => {
      booking.bookingItems = await Promise.all(booking.bookingItems.map(async (bookingItem) => {
        bookingItem.busSchedule = await this.busScheduleService.findOne(bookingItem.busScheduleId);
        return bookingItem;
      }));
      return booking;
    });

    return await Promise.all(bookingPromises);
  }

  async findOneByIdAndUser(userId: Types.ObjectId, bookingId: Types.ObjectId): Promise<BookingDto | null> {
    const bookingModel = await this.bookingModel.findOne({ userId, _id: bookingId }).lean().exec();

    const booking = plainToInstance(BookingDto, bookingModel);

    if (!booking) {
      return null;
    }

    const bookingPromises = booking.bookingItems.map(async (bookingItem) => {
      bookingItem.busSchedule = await this.busScheduleService.findOne(bookingItem.busScheduleId);
      return bookingItem;
    });
    await Promise.all(bookingPromises);
    return booking;
  }

  generateBookingNumber(): string {
    return this.nanoid();
  }
}
