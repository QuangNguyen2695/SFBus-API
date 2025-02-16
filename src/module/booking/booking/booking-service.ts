import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBookingDto } from './dto/create-booking.dto';
import { BookingDocument } from './schema/booking.schema';
import { plainToInstance } from 'class-transformer';
import { BookingDto } from './dto/booking.dto';
import { BusScheduleTemplateService } from '@/module/bus/bus-schedule-template/bus-schedule-template.service';
import { BusScheduleService } from '@/module/bus/bus-schedule/bus-schedule.service';
import { UpdateBusScheduleDto } from '@/module/bus/bus-schedule/dto/update-bus-schedule.dto';

@Injectable()
export class BookingService {
  constructor(
    @InjectModel(BookingDocument.name) private readonly bookingModel: Model<BookingDocument>,
    private readonly busScheduleTemplateService: BusScheduleTemplateService,
    private readonly busScheduleService: BusScheduleService,
  ) { }

  async create(createBookingDto: CreateBookingDto[]): Promise<BookingDto[]> {
    const bookingPromises = createBookingDto.map(async (booking) => {
      const createBooking = new this.bookingModel({
        ...booking,
        status: 'pending',
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


}
