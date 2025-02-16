import { Module } from '@nestjs/common';
import { PaymentService } from './payment-service';
import { MongooseModule } from '@nestjs/mongoose';
import { PaymentDocument, PaymentSchema } from './schema/payment.schema';
import { BusScheduleTemplateModule } from '@/module/bus/bus-schedule-template/bus-schedule-template.module';
import { BusScheduleModule } from '@/module/bus/bus-schedule/bus-schedule.module';
import { PaymentController } from './payment.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: PaymentDocument.name, schema: PaymentSchema }]),
    BusScheduleModule,
    BusScheduleTemplateModule,
  ],
  controllers: [PaymentController],
  providers: [PaymentService],
  exports: [PaymentService],
})
export class PaymentModule { }
