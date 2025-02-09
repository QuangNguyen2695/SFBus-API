import { Module } from '@nestjs/common';
import { BusService } from './bus.service';
import { BusController } from './bus.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BusDocument, BusSchema } from './schema/bus.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: BusDocument.name, schema: BusSchema },
    ]),
  ],
  controllers: [BusController],
  providers: [BusService],
})
export class BusModule { }
