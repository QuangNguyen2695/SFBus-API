import { Types } from "mongoose"

export class CreateBusRouteDto {
    name: string;
    breakPoints: CreateBusRouteBreakPointsDto[];
    distance: number;
    distanceTime: string;
    notes?: string;
}

export class CreateBusRouteBreakPointsDto {
    busStationId: Types.ObjectId;
    notes?: string;
}
