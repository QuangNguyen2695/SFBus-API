import { BusScheduleBusDto, BusScheduleDto } from "@/module/bus/bus-schedule/dto/bus-schedule.dto";
import { BusTemplateSeatDto } from "@/module/bus/bus-template/dto/bus-template.dto";
import { Exclude, Expose } from "class-transformer";
import { Types } from "mongoose";

export class BookingSeatDto {
    @Expose()
    _id: Types.ObjectId;

    @Expose()
    seatNumber: string;

    @Expose()
    name: string;

    @Expose()
    price: number;
}

export class BookingItemDto {
    @Expose()
    busScheduleId: Types.ObjectId;

    @Expose()
    type: string;

    @Expose()
    busSchedule: BusScheduleDto;

    @Expose()
    seats: BookingSeatDto[];

    @Expose()
    departure: string;

    @Expose()
    destination: string;

    @Expose()
    price: number;
}


export class BookingDto {
    @Expose()
    _id: Types.ObjectId;

    @Expose()
    bookingNumber: string;

    @Expose()
    bookingItems: BookingItemDto[]

    @Expose()
    userId: Types.ObjectId;

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