import { Types } from "mongoose";

export class BusTemplateSeatDto {
    index: number;
    type: Types.ObjectId;
    name: string;
    icon: string;
    status: string;
}

export class BusTemplateSeatLayoutDto {
    name: string;
    seats: BusTemplateSeatDto[];
}

export class BusTemplateDto {
    name: string;
    seatLayouts: BusTemplateSeatLayoutDto[];
}
