import { Types } from "mongoose";

export class CreateBookingDto {
    busScheduleId: Types.ObjectId;

    userId: Types.ObjectId;

    seats: string[];

    departure: string;

    destination: string;

    totalPrice: number;

    paymentTime?: Date;

    status?: boolean;
}

