import { Types } from "mongoose";

export class CreatePaymentDto {
    bookingIds: Types.ObjectId[];

    userId: Types.ObjectId;

    promotionId?: Types.ObjectId;

    totalPrice: number;

    paymentMethoId: Types.ObjectId;

    status: string;
}

