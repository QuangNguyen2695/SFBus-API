// src/bus-schedule/dto/update-bus-schedule.dto.ts
import { PartialType } from '@nestjs/mapped-types';
import { CreateBusScheduleDto } from './create-bus-schedule.dto';
import { IsEnum, IsOptional } from 'class-validator';

export class UpdateBusScheduleDto extends PartialType(CreateBusScheduleDto) {
    @IsOptional()
    @IsEnum(['scheduled', 'in_progress', 'completed', 'cancelled'])
    status?: 'scheduled' | 'in_progress' | 'completed' | 'cancelled';
}
