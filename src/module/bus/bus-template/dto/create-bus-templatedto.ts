// dto/create-bus-template.dto.ts

import { IsNotEmpty, IsString, IsArray, ArrayNotEmpty } from 'class-validator';

export class CreateBusTemplateDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsArray()
    @ArrayNotEmpty()
    @IsString({ each: true })
    seatLayouts: string[];
}
