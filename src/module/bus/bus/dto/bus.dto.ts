// src/bus/interfaces/bus.interface.ts
import { Types } from 'mongoose';
import { BusServiceDto } from '../../bus-service/dto/bus-service.dto';
import { BusTypeDto } from '../../bus-type/dto/bus-type.dto';
import { Exclude, Expose } from 'class-transformer';

export class BusDto {
  @Expose()
  name: string;

  @Exclude()
  busServiceIds: Types.ObjectId[];

  @Expose()
  busServices: BusServiceDto[];

  @Exclude()
  busTypeId: Types.ObjectId;

  @Expose()
  busType: BusTypeDto;

  @Expose()
  licensePlate: string;

  @Expose()
  busTemplateId: Types.ObjectId

  @Exclude()
  createdAt: Date

  @Exclude()
  updatedAt: Date

  @Exclude()
  __v: number
}