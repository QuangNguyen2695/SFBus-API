import { Types } from "mongoose";

export class BusTemplateSeatDto {
    _id: Types.ObjectId;
    index: number;
    type: Types.ObjectId;
    name: string;
    status: string;
}

export class BusTemplateSeatLayoutDto {
    _id: Types.ObjectId;
    name: string;
    seats: BusTemplateSeatDto[];
}

export class BusTemplateDto {
    name: string;
    seatLayouts: BusTemplateSeatLayoutDto[];
}
