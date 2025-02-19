import { Exclude, Expose } from "class-transformer";
import { Types } from "mongoose";

export class UserAddressDto {
    addressType: string;
    address: string
}

export class UserDto {

    @Expose()
    _id: Types.ObjectId;

    @Exclude()
    password: string;

    @Expose()
    name: string;

    @Expose()
    addresses?: UserAddressDto[];

    @Expose()
    gender: string;

    @Expose()
    email: string;

    @Expose()
    phoneNumber: string;

    @Expose()
    birthdate?: Date;

    @Expose()
    role: string;

    @Exclude()
    createdAt: Date

    @Exclude()
    isTempPassWord: boolean

    @Exclude()
    updatedAt: Date

    @Exclude()
    __v: number
}