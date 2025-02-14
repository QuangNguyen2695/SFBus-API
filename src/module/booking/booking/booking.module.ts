import { Module } from '@nestjs/common';
import { BookingService } from './booking-service';
import { MongooseModule } from '@nestjs/mongoose';
import { BookingController } from './booking.controller';
import { BookingDocument, BookingSchema } from './schema/booking.schema';
import { BusScheduleTemplateModule } from '@/module/bus/bus-schedule-template/bus-schedule-template.module';
import { BusScheduleModule } from '@/module/bus/bus-schedule/bus-schedule.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: BookingDocument.name, schema: BookingSchema }]),
    BusScheduleModule,
    BusScheduleTemplateModule,
  ],
  controllers: [BookingController],
  providers: [BookingService],
  exports: [BookingService],
})
export class BookingModule { }
