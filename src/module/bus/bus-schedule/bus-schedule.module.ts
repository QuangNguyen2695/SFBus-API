// src/bus-schedule/bus-schedule.module.ts
import { Module } from '@nestjs/common';
import { BusScheduleService } from './bus-schedule.service';
import { BusScheduleController } from './bus-schedule.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BusScheduleDocument, BusScheduleSchema } from './schema/bus-schedule.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: BusScheduleDocument.name, schema: BusScheduleSchema },
    ]),
  ],
  controllers: [BusScheduleController],
  providers: [BusScheduleService],
})
export class BusScheduleModule { }
