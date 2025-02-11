import { Exclude, Expose } from "class-transformer";
import { Types } from "mongoose";

export class UserDto {

    @Expose()
    _id: Types.ObjectId;

    @Exclude()
    password: string;

    @Expose()
    name: string;

    @Expose()
    address?: string;

    @Expose()
    gender: string;

    @Expose()
    email: string;

    @Expose()
    phoneNumber?: string;

    @Expose()
    birthdate?: Date;

    @Expose()
    role: string;

    @Exclude()
    createdAt: Date

    @Exclude()
    updatedAt: Date

    @Exclude()
    __v: number
}