import { Types } from "mongoose"

export class CreateBusRouteDto {
    readonly name: string;
    readonly breakPoints: BreakPointsDto[];
    readonly distance: number;
    readonly distanceTime: string;
    readonly notes?: string;
}

export class BreakPointsDto {
    readonly busStationId: Types.ObjectId;
    readonly notes?: string;
}
