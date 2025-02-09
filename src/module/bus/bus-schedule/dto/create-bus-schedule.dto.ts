import { IsNotEmpty, IsOptional, IsEnum, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { Types } from 'mongoose';

export class BreakPointsTimeDto {
  @IsNotEmpty()
  busStationId: Types.ObjectId;

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

  @IsOptional()
  @IsEnum(['scheduled', 'in_progress', 'completed', 'cancelled'])
  status?: 'scheduled' | 'in_progress' | 'completed' | 'cancelled';
}
