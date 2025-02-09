import { Document, Types } from 'mongoose';

export class BusRouteDto {
  readonly name: string;
  readonly breakPoints: BreakPointsDto[];
  readonly distance: number;
  readonly distanceTime: string;
  readonly notes?: string;
}


class BreakPointsDto {
  readonly busStationId: Types.ObjectId;
  readonly notes?: string;
}