// src/bus-schedule/bus-schedule.module.ts
import { Module } from '@nestjs/common';
import { BusScheduleService } from './bus-schedule.service';
import { BusScheduleController } from './bus-schedule.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BusScheduleDocument, BusScheduleSchema } from './schema/bus-schedule.schema';
import { BusModule } from '../bus/bus.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: BusScheduleDocument.name, schema: BusScheduleSchema },
    ]),
    BusModule,
  ],
  controllers: [BusScheduleController],
  providers: [BusScheduleService],
  exports: [BusScheduleService],
})
export class BusScheduleModule { }
