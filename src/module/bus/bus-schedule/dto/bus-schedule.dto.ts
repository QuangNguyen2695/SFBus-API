// src/bus-schedule/interfaces/bus-schedule.interface.ts
import { Document, Types } from 'mongoose';

export interface BreakPointsTimeDto {
  busStationId: Types.ObjectId;
  timeSchedule?: Date;
}

export interface BusScheduleDto {
  busId: Types.ObjectId;
  busRouteId: Types.ObjectId;
  breakPointsTime: BreakPointsTimeDto[];
  status: 'scheduled' | 'in_progress' | 'completed' | 'cancelled';
}
