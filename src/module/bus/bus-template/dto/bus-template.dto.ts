import { Types } from "mongoose"

export class BusTemplateDto {
    readonly name: string
    readonly seatLayouts: Types.Array<Types.ObjectId>;
}