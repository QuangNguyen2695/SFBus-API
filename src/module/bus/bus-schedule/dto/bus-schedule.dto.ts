import { Types } from 'mongoose';

export class BreakPointsTimeDto {
  busStationId: Types.ObjectId;
  timeSchedule?: Date;
}

export class BusScheduleDto {
  busId: Types.ObjectId;
  busRouteId: Types.ObjectId;
  breakPointsTime: BreakPointsTimeDto[];
  status: 'scheduled' | 'in_progress' | 'completed' | 'cancelled';
}
