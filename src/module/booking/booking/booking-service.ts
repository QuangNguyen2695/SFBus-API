import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBookingDto } from './dto/create-bookingdto';
import { BookingDocument } from './schema/booking.schema';
import { plainToInstance } from 'class-transformer';
import { BookingDto } from './dto/bookingdto';
import { BusScheduleTemplateService } from '@/module/bus/bus-schedule-template/bus-schedule-template.service';
import { BusScheduleService } from '@/module/bus/bus-schedule/bus-schedule.service';
import { UpdateBusScheduleDto } from '@/module/bus/bus-schedule/dto/update-bus-schedule.dto';

@Injectable()
export class BookingService {
  constructor(
    @InjectModel(BookingDocument.name) private readonly Booking: Model<BookingDocument>,
    private readonly busScheduleTemplateService: BusScheduleTemplateService,
    private readonly busScheduleService: BusScheduleService,
  ) { }

  async create(createBookingDto: CreateBookingDto[]): Promise<BookingDto[]> {
    const bookingPromises = createBookingDto.map(async (booking) => {
      const createBooking = new this.Booking({
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


  async findAll(): Promise<BookingDto[]> {
    const Bookings = await this.Booking.find().lean().exec();
    return plainToInstance(BookingDto, Bookings);
  }

  async findOne(id: string): Promise<BookingDto> {
    const Booking = await this.Booking.findById(id).lean().exec();
    return plainToInstance(BookingDto, Booking);
  }
}
