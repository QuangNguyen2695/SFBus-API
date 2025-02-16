import { Exclude, Expose } from "class-transformer";
import { Types } from "mongoose";

export class PaymentBankingDto {
    @Expose()
    bankName: string;

    @Expose()
    accountNumber: string;

    @Expose()
    accountName: string;
}

export class PaymentMethodDto {

    @Expose()
    name: string;

    @Expose()
    banking?: PaymentBankingDto;

    @Expose()
    type: string

    @Expose()
    icon: string;

    @Expose()
    status: boolean;

    @Expose()
    isDefault?: boolean;

    @Exclude()
    createdAt: Date

    @Exclude()
    updatedAt: Date

    @Exclude()
    __v: number
}
