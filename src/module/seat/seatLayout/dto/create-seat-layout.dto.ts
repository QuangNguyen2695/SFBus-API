import {
    IsArray,
    IsNotEmpty,
    IsNumber,
    IsString,
    ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { CreateSeatDto } from '../../seat/dto/create-seat.dto';

export class CreateSeatLayoutDto {
    @IsNotEmpty()
    @IsNumber()
    id: number;

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CreateSeatDto)
    seats: CreateSeatDto[];
}
