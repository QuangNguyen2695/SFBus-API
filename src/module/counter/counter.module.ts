import { Module } from '@nestjs/common';
import { CounterService } from './counter-service';
import { MongooseModule } from '@nestjs/mongoose';
import { CounterDocument, CounterSchema } from './schema/counter.schema';
import { BusScheduleTemplateModule } from '@/module/bus/bus-schedule-template/bus-schedule-template.module';
import { BusScheduleModule } from '@/module/bus/bus-schedule/bus-schedule.module';
import { CounterController } from './counter.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: CounterDocument.name, schema: CounterSchema }]),
  ],
  controllers: [CounterController],
  providers: [CounterService],
  exports: [CounterService],
})
export class CounterModule { }
