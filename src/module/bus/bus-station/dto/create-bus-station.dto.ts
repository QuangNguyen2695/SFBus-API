import { Types } from "mongoose"

export class CreateBusStationDto {
    readonly name: string
    readonly detailAddress: string
    readonly location: string;
    readonly provinceId: Types.ObjectId
}
