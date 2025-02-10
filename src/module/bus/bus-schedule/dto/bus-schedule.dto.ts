import { Types } from 'mongoose';
import { BusTemplateDto } from '../../bus-template/dto/bus-template.dto';
import { IsNotEmpty, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class BreakPointsTimeDto {
  busStationId: Types.ObjectId;
  name: string;
  detailAddress: string;
  location: string;
  provinceId: Types.ObjectId;
  timeSchedule: Date;
}

export class BusScheduleDto {
  busId: Types.ObjectId;
  busRouteId: Types.ObjectId;
  breakPointsTime: BreakPointsTimeDto[];
  busTemplatesId: Types.ObjectId;
  busTemplates: BusTemplateDto;
  price: number;
  status: 'scheduled' | 'in_progress' | 'completed' | 'cancelled';
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


