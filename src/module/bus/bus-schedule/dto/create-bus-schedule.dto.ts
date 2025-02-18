import { IsNotEmpty, IsOptional, IsEnum, ValidateNested } from 'class-validator';
import { Types } from 'mongoose';
import { CreateBusRouteBreakPointsDto, CreateBusRouteDto } from '../../bus-route/dto/create-bus-route.dto';
import { BusProvinceDto } from '../../bus-province/dto/bus-province.dto';

export class CreateBusScheduleBreakPointsTimeDto extends CreateBusRouteBreakPointsDto {
  @IsNotEmpty()
  name: string

  @IsNotEmpty()
  detailAddress: string

  location: string

  @IsNotEmpty()
  provinceId: Types.ObjectId

  @IsNotEmpty()
  province: BusProvinceDto;

  @IsOptional()
  timeSchedule?: Date;
}

export class CreateBusRouteScheduleDto extends CreateBusRouteDto {
  breakPoints: CreateBusScheduleBreakPointsTimeDto[];
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
