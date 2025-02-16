import { Module } from '@nestjs/common';
import { BusProvinceService } from './bus-province.service';
import { BusProvinceController } from './bus-province.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BusProvinceDocument, BusProvinceSchema } from './schema/bus-schema.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: BusProvinceDocument.name, schema: BusProvinceSchema }])
  ],
  controllers: [BusProvinceController],
  providers: [BusProvinceService],
  exports: [BusProvinceService],
})
export class BusProvinceModule { }
