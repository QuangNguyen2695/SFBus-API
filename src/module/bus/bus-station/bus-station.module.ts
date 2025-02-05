import { Module } from '@nestjs/common';
import { BusStationService } from './bus-station.service';
import { BusStationController } from './bus-station.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BusStationSchema } from './schema/bus-station.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'BusStation', schema: BusStationSchema }])
  ],
  controllers: [BusStationController],
  providers: [BusStationService],
  exports: [BusStationService],
})
export class BusStationModule { }
