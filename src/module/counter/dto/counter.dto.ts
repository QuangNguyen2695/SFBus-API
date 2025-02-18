import { Exclude, Expose } from "class-transformer";

export class PaymentDto {
    @Expose()
    seatCounter: number;

    @Exclude()
    createdAt: Date

    @Exclude()
    updatedAt: Date

    @Exclude()
    __v: number
}