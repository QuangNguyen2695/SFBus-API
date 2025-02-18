import { Types } from "mongoose";
import { BusScheduleDto } from "@/module/bus/bus-schedule/dto/bus-schedule.dto";

export class CreateBookingSeatDto {
    _id: Types.ObjectId;

    seatNumber: string;

    name: string;

    price: number;
}

export class CreateBookingItemDto {
    busScheduleId: Types.ObjectId;

    type: string;

    seats: CreateBookingSeatDto[];

    departure: string;

    destination: string;

    price: number;
}


export class CreateBookingDto {
    _id: Types.ObjectId;

    bookingNumber: string;

    bookingItems: CreateBookingItemDto[]

    userId: Types.ObjectId;

    totalPrice: number;

    status?: string;

    paymentTime?: Date;
}

