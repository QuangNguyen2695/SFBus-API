import { Exclude, Expose } from "class-transformer";
import { Types } from "mongoose";

export class BookingDto {
    @Expose()
    _id: Types.ObjectId;

    @Expose()
    userId: Types.ObjectId;

    @Expose()
    busScheduleId: Types.ObjectId;

    @Expose()
    seats: Types.ObjectId[];

    @Expose()
    departure: string;

    @Expose()
    destination: string;

    @Expose()
    totalPrice: number;

    @Expose()
    status?: string;

    @Expose()
    paymentTime?: Date;

    @Exclude()
    createdAt: Date

    @Exclude()
    updatedAt: Date

    @Exclude()
    __v: number
}