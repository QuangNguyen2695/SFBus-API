import { Module } from '@nestjs/common';
import { SeatService } from './seat.service';
import { SeatController } from './seat.controller';
import { SeatTypeModule } from '../seat-type/seat-type.module';

@Module({
  controllers: [SeatController],
  providers: [SeatService],
  imports: [SeatTypeModule],
})
export class SeatModule {}
