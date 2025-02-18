import { Document, Types } from 'mongoose';

export class BusRouteDto {
  name: string;
  breakPoints: BusRouteBreakPointsDto[];
  distance: number;
  distanceTime: string;
  notes?: string;
}


class BusRouteBreakPointsDto {
  busStationId: Types.ObjectId;
}