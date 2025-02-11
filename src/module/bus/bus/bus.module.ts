import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BusService } from './bus.service';
import { BusController } from './bus.controller';
import { BusDocument, BusSchema } from './schema/bus.schema';
import { BusServiceModule } from '../bus-service/bus-service.module';
import { BusTypeModule } from '../bus-type/bus-type.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: BusDocument.name, schema: BusSchema }]),
    BusServiceModule,
    BusTypeModule
  ],
  controllers: [BusController],
  providers: [BusService],
  exports: [BusService],
})
export class BusModule { }
