import { IsNotEmpty, IsOptional, IsEnum, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { Types } from 'mongoose';
import { BusTemplateDto } from '../../bus-template/dto/bus-template.dto';

export class BreakPointsTimeDto {
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

export class CreateBusScheduleDto {
  @IsNotEmpty()
  busId: Types.ObjectId;

  @IsNotEmpty()
  busRouteId: Types.ObjectId;

  @IsNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => BreakPointsTimeDto)
  breakPointsTime: BreakPointsTimeDto[];

  @IsNotEmpty()
  busTemplatesId: Types.ObjectId

  @IsNotEmpty()
  busTemplates: BusTemplateDto

  @IsNotEmpty()
  price: number;

  @IsOptional()
  @IsEnum(['scheduled', 'in_progress', 'completed', 'cancelled'])
  status?: 'scheduled' | 'in_progress' | 'completed' | 'cancelled';
}
