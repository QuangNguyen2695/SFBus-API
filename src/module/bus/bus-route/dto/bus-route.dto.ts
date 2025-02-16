import { Document, Types } from 'mongoose';

export class BusRouteDto {
  name: string;
  breakPoints: BusRouteBreakPointsDto[];
  distance: number;
  distanceTime: string;
  notes?: string;
}


class BusRouteBreakPointsDto {
  timeSchedule: Date;
  busStationId: Types.ObjectId;
  provinceId: Types.ObjectId;
  name: string;
  detailAddress: string;
  location: string;
  notes?: string;
}