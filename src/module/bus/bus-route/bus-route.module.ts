import { Module } from '@nestjs/common';
import { BusRouteService } from './bus-route.service';
import { BusRouteController } from './bus-route.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BusRouteDocument, BusRouteSchema } from './schema/bus-route.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: BusRouteDocument.name, schema: BusRouteSchema }])
  ],
  controllers: [BusRouteController],
  providers: [BusRouteService],
  exports: [BusRouteService],
})
export class BusRouteModule { }
