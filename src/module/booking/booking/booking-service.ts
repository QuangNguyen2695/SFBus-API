import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { CreateBookingDto } from './dto/create-booking.dto';
import { BookingDocument } from './schema/booking.schema';
import { plainToInstance, Type } from 'class-transformer';
import { BookingDto } from './dto/booking.dto';
import { BusScheduleTemplateService } from '@/module/bus/bus-schedule-template/bus-schedule-template.service';
import { BusScheduleService } from '@/module/bus/bus-schedule/bus-schedule.service';
import { UpdateBusScheduleDto } from '@/module/bus/bus-schedule/dto/update-bus-schedule.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { customAlphabet } from 'nanoid';

@Injectable()
export class BookingService {

  private alphabet = process.env.ALPHABET || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  private nanoid = customAlphabet(this.alphabet, 6);

  constructor(
    @InjectModel(BookingDocument.name) private readonly bookingModel: Model<BookingDocument>,
    private readonly busScheduleTemplateService: BusScheduleTemplateService,
    private readonly busScheduleService: BusScheduleService,
  ) { }

  async create(createBookingDto: CreateBookingDto[]): Promise<BookingDto[]> {
    console.log("🚀 ~ BookingService ~ create ~ createBookingDto:", createBookingDto)
    const bookingPromises = createBookingDto.map(async (booking) => {
      const createBooking = new this.bookingModel({
        ...booking,
        status: 'pending',
        bookingNumber: this.generateBookingNumber(),
        paymentTime: new Date(Date.now() + 10 * 60 * 1000) // 10 minutes from now
      });

      const busSchedule = await this.busScheduleService.findOne(booking.busScheduleId);
      busSchedule.remainSeat -= booking.seats.length;

      const updateBusScheduleResult = await this.busScheduleService.update(busSchedule._id, busSchedule);
      if (!updateBusScheduleResult) {
        throw new NotFoundException('Update bus schedule failed');
      }

      const updateSeatStatusResult = await this.busScheduleTemplateService.updateSeatStatus(busSchedule.busScheduleTemplateId, booking.seats, 'booked');
      if (!updateSeatStatusResult) {
        throw new NotFoundException('Update seats failed');
      }

      await createBooking.save();
      return createBooking.toObject(); // Convert to plain JavaScript obje
    });

    const createdBookings = await Promise.all(bookingPromises);
    return plainToInstance(BookingDto, createdBookings);
  }

  async update(id: string, updateBookingDto: UpdateBookingDto): Promise<BookingDto> {
    const updateBooking = await this.bookingModel.findByIdAndUpdate(id, updateBookingDto, { new: true }).exec();
    if (!updateBooking) {
      throw new NotFoundException(`payment with ID "${id}" not found.`);
    }
    return plainToInstance(BookingDto, updateBooking.toObject());
  }


  async cancelBooking(BookingsDto: string[]): Promise<boolean> {

    const bookingPromises = BookingsDto.map(async (booking) => {
      this.bookingModel.findById(booking).exec().then(async (booking: any) => {

        // Update bus schedule
        const busSchedule = await this.busScheduleService.findOne(booking.busScheduleId);
        busSchedule.remainSeat += booking.seats.length;

        const updateBusScheduleResult = await this.busScheduleService.update(busSchedule._id, busSchedule);
        if (!updateBusScheduleResult) {
          throw new NotFoundException('Update bus schedule failed');
        }

        // Update seat status
        const updateSeatStatusResult = await this.busScheduleTemplateService.updateSeatStatus(busSchedule.busScheduleTemplateId, booking.seats, 'available');
        if (!updateSeatStatusResult) {
          throw new NotFoundException('Update seats failed');
        }

        return this.deleteOne(booking);
      });
    });

    await Promise.all(bookingPromises);
    return true;
  }


  async findAll(): Promise<BookingDto[]> {
    const Bookings = await this.bookingModel.find().lean().exec();
    return plainToInstance(BookingDto, Bookings);
  }

  async findOne(id: string): Promise<BookingDto> {
    const Booking = await this.bookingModel.findById(id).lean().exec();
    return plainToInstance(BookingDto, Booking);
  }

  async deleteOne(id: string): Promise<boolean> {
    const result = await this.bookingModel.findByIdAndDelete(id).exec();
    return result !== null;
  }

  async findByUserId(userId: string): Promise<BookingDto[]> {
    const bookingModel = await this.bookingModel.find({ userId }).lean().exec();

    const booking = plainToInstance(BookingDto, bookingModel);

    if (!booking) {
      return [];
    }

    const bookingPromises = booking.map(async (booking) => {
      booking.busSchedule = await this.busScheduleService.findOne(booking.busScheduleId);
      return booking;
    });


    return await Promise.all(bookingPromises);
  }

  generateBookingNumber(): string {
    return this.nanoid();
  }
}
