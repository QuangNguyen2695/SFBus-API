import { Exclude, Expose } from "class-transformer";
import { Types } from "mongoose";

export class PaymentDto {
    @Expose()
    bookingId: Types.ObjectId;

    @Expose()
    userId: Types.ObjectId;

    @Expose()
    promotionId?: Types.ObjectId;

    @Expose()
    totalPrice: number;

    @Expose()
    paymentMethodId: Types.ObjectId;

    @Expose()
    status: string;

    @Exclude()
    createdAt: Date

    @Exclude()
    updatedAt: Date

    @Exclude()
    __v: number
}