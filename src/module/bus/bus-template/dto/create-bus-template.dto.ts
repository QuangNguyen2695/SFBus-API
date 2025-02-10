export class CreateBusTemplateSeatDto {
    index: number;
    type: number;
    name: string;
    icon: string;
    status: string;
}

export class CreateBusTemplateSeatLayoutDto {
    name: string;
    seats: CreateBusTemplateSeatDto[];
}

export class CreateBusTemplateDto {
    name: string;
    seatLayouts: CreateBusTemplateSeatLayoutDto[];
}