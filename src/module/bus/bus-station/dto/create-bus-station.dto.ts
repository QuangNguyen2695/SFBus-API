import { Types } from "mongoose"

export class CreateBusStationDto {
    readonly name: string
    readonly detailAddress: string
    readonly provinceId: Types.ObjectId
}
