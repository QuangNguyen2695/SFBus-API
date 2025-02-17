import { BusScheduleBusDto, BusScheduleDto } from "@/module/bus/bus-schedule/dto/bus-schedule.dto";
import { BusTemplateSeatDto } from "@/module/bus/bus-template/dto/bus-template.dto";
import { Exclude, Expose } from "class-transformer";
import { Types } from "mongoose";

export class BookingSeatDto {
    @Expose()
    _id: Types.ObjectId;

    @Expose()
    name: string;
}


export class BookingDto {
    @Expose()
    _id: Types.ObjectId;

    @Expose()
    userId: Types.ObjectId;

    @Expose()
    busScheduleId: Types.ObjectId;

    @Expose()
    busSchedule: BusScheduleDto;

    @Expose()
    seats: BookingSeatDto[];

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