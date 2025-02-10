export class BusTemplateSeatDto {
    index: number;
    type: number;
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
