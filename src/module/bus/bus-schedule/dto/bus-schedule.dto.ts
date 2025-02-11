import { Types } from 'mongoose';
import { IsNotEmpty, IsString } from 'class-validator';
import { Exclude, Expose, Type } from 'class-transformer';
import { BusDto } from '../../bus/dto/bus.dto';
import { BusRouteDto } from '../../bus-route/dto/bus-route.dto';

export class BreakPointsTimeDto {
  @Expose()
  busStationId: Types.ObjectId;

  @Expose()
  name: string;

  @Expose()
  detailAddress: string;

  @Expose()
  location: string;

  @Expose()
  provinceId: Types.ObjectId;

  @Expose()
  timeSchedule: Date;
}

export class BusScheduleBusDto extends BusDto {

}


export class BusScheduleRouteDto extends BusRouteDto {

}

export class BusScheduleDto {

  @Expose()
  busId: Types.ObjectId;

  @Expose()
  bus: BusScheduleBusDto;

  @Exclude()
  busRouteId: Types.ObjectId;

  @Expose()
  busRoute: BusScheduleRouteDto;

  @Expose()
  busTemplatesId: Types.ObjectId;

  @Expose()
  price: number;

  @Expose()
  remainSeat: number

  @Expose()
  status: 'scheduled' | 'in_progress' | 'completed' | 'cancelled';

  @Exclude()
  createdAt: Date

  @Exclude()
  updatedAt: Date

  @Exclude()
  __v: number
}


export class SearchBusScheduleQuery {
  @Type(() => String)
  @IsNotEmpty()
  @IsString()
  departureDate: string;

  @Type(() => String)
  @IsNotEmpty()
  departureId: Types.ObjectId;

  @Type(() => String)
  @IsNotEmpty()
  destinationId: Types.ObjectId;
}


