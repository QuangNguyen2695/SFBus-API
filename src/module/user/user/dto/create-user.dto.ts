import {
    IsNotEmpty,
    IsString,
    MinLength,
    IsEmail,
    IsOptional,
    IsEnum,
    IsDateString,
    Matches,
} from 'class-validator';

export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    readonly username: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    password: string;

    @IsNotEmpty()
    @IsString()
    readonly name: string;

    @IsOptional()
    @IsString()
    readonly address?: string;

    @IsNotEmpty()
    @IsEmail()
    readonly email: string;

    @IsOptional()
    @IsString()
    @Matches(/^\d{10,15}$/, {
        message: 'Số điện thoại không hợp lệ.',
    })
    readonly phoneNumber?: string;

    @IsNotEmpty()
    @IsEnum(['male', 'female', 'other'], {
        message: 'Giới tính phải là male, female hoặc other.',
    })
    readonly gender: string;

    @IsOptional()
    @IsDateString()
    readonly birthdate?: string; // Sử dụng ISO String cho ngày tháng
}
