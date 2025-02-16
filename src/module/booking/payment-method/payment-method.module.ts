import { Module } from '@nestjs/common';
import { PaymentMethodService } from './payment-method-service';
import { MongooseModule } from '@nestjs/mongoose';
import { PaymentMethodDocument, PaymentMethodSchema } from './schema/payment-method.schema';
import { BusScheduleTemplateModule } from '@/module/bus/bus-schedule-template/bus-schedule-template.module';
import { BusScheduleModule } from '@/module/bus/bus-schedule/bus-schedule.module';
import { PaymentMethodController } from './payment-method.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: PaymentMethodDocument.name, schema: PaymentMethodSchema }]),
    BusScheduleModule,
    BusScheduleTemplateModule,
  ],
  controllers: [PaymentMethodController],
  providers: [PaymentMethodService],
  exports: [PaymentMethodService],
})
export class PaymentMethodModule { }
