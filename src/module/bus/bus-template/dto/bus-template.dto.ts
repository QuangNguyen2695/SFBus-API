export class BusTemplateSeatDto extends Document {
    index: number;
    type: number;
    name: string;
    icon: string;
    status: string;
}

export class BusTemplateSeatLayoutDto extends Document {
    name: string;
    seats: BusTemplateSeatDto[];
}

export class BusTemplateDto extends Document {
    name: string;
    seatLayouts: BusTemplateSeatDto[];
}
