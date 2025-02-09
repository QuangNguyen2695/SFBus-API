// seat.module.ts

import { Module } from '@nestjs/common';
import { SeatService } from './seat.service';
import { SeatController } from './seat.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { SeatDocument, SeatSchema } from './schema/seat.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: SeatDocument.name, schema: SeatSchema }]),
  ],
  controllers: [SeatController],
  providers: [SeatService],
  exports: [SeatService, MongooseModule],
})
export class SeatModule { }
