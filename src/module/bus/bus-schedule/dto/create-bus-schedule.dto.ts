import { IsNotEmpty, IsOptional, IsEnum, ValidateNested } from 'class-validator';
import { Types } from 'mongoose';
import { CreateBusRouteBreakPointsDto, CreateBusRouteDto } from '../../bus-route/dto/create-bus-route.dto';

export class CreateBusScheduleBreakPointsTimeDto {
  @IsNotEmpty()
  busStationId: Types.ObjectId;

  @IsNotEmpty()
  name: string
  @IsNotEmpty()
  detailAddress: string

  location: string

  @IsNotEmpty()
  provinceId: Types.ObjectId

  @IsOptional()
  timeSchedule?: Date;
}

export class CreateBusRouteScheduleBreakPointsDto extends CreateBusRouteBreakPointsDto {
  timeSchedule: Date;
  provinceId: Types.ObjectId;
  name: string;
  detailAddress: string;
  location: string;
}

export class CreateBusRouteScheduleDto extends CreateBusRouteDto {
  breakPoints: CreateBusRouteScheduleBreakPointsDto[];
}

export class CreateBusScheduleDto {
  @IsNotEmpty()
  busId: Types.ObjectId;

  @IsNotEmpty()
  busRouteId: Types.ObjectId;

  @IsNotEmpty()
  busRoute: CreateBusRouteScheduleDto;

  @IsNotEmpty()
  busScheduleTemplateId: Types.ObjectId

  @IsNotEmpty()
  price: number;

  @IsNotEmpty()
  remainSeat: number;

  @IsOptional()
  @IsEnum(['scheduled', 'in_progress', 'completed', 'cancelled'])
  status?: 'scheduled' | 'in_progress' | 'completed' | 'cancelled';
}
