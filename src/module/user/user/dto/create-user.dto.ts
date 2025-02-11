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
    phoneNumber?: string;
    
    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    password: string;

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsOptional()
    @IsString()
    address?: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsOptional()
    @IsString()
    @Matches(/^\d{10,15}$/, {
        message: 'Số điện thoại không hợp lệ.',
    })

    @IsNotEmpty()
    @IsEnum(['male', 'female', 'other'], {
        message: 'Giới tính phải là male, female hoặc other.',
    })
    gender: string;

    @IsOptional()
    @IsDateString()
    birthdate?: string; // Sử dụng ISO String cho ngày tháng
}
