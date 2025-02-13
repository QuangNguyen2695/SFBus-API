import { Exclude, Expose } from "class-transformer";
import { Types } from "mongoose";

export class SeatTypeDto {
    @Expose()
    _id: Types.ObjectId;

    @Expose()
    name: String;

    @Expose()
    icon: string;

    @Expose()
    blockIcon: string;

    @Expose()
    selectedIcon: string;

    @Exclude()
    createdAt: Date

    @Exclude()
    updatedAt: Date

    @Exclude()
    __v: number
}