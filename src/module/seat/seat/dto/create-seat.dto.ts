import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateSeatDto {
    @IsString()
    id: string;

    @IsNumber()
    value: number;

    @IsNumber()
    type: number;

    @IsBoolean()
    @IsOptional()
    isEditing?: boolean;

    @IsString()
    @IsOptional()
    name?: string;

    @IsString()
    @IsOptional()
    icon?: string;

    @IsString()
    @IsOptional()
    status?: string;

}
