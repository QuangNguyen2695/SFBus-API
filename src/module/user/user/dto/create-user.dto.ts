import {
    IsNotEmpty,
    IsString,
    MinLength,
    IsEmail,
    IsOptional,
    IsEnum,
    IsDateString,
    Matches,
    IsBoolean,
} from 'class-validator';


export class CreateUserAddressDto {
    addressType: string;
    address: string
}

export class CreateUserDto {

    @IsNotEmpty()
    @IsString()
    phoneNumber: string;

    @IsOptional()
    @IsString()
    @MinLength(6)
    password: string;

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsOptional()
    addresses?: CreateUserAddressDto[];

    @IsOptional()
    @IsEmail()
    email: string;

    @IsOptional()
    @IsEnum(['male', 'female', 'other'], {
        message: 'Giới tính phải là male, female hoặc other.',
    })
    gender: string;

    @IsOptional()
    @IsDateString()
    birthdate?: string; // Sử dụng ISO String cho ngày tháng

    @IsNotEmpty()
    @IsBoolean()
    isTempPassWord: boolean; // Sử dụng ISO String cho ngày tháng
}
