import { Exclude, Expose } from "class-transformer";
import { Types } from "mongoose";

export class BusTypeDto {
    @Expose()
    readonly _id: Types.ObjectId;

    @Expose()
    readonly name: String;

    @Exclude()
    createdAt: Date

    @Exclude()
    updatedAt: Date

    @Exclude()
    __v: number
}