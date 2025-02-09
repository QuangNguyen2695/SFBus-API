import { Types } from "mongoose"

export class BusStationDto {
  readonly name: string
  readonly detailAddress: string
  readonly provinceId: Types.ObjectId
}