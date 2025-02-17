import { Types } from "mongoose";

export class BookingSeatDto {
    _id: Types.ObjectId;
    name: string;
}

export class CreateBookingDto {
    busScheduleId: Types.ObjectId;

    userId: Types.ObjectId;

    seats: BookingSeatDto[];

    departure: Types.ObjectId;

    destination: Types.ObjectId;

    totalPrice: number;

    paymentTime?: Date;

    status?: string;
}

