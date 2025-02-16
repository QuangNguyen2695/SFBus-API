import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export class PaymentBankingDocument extends Document {
    @Prop({ required: true })
    bankName: string;

    @Prop({ required: true })
    accountNumber: string;

    @Prop({ required: true })
    accountName: string;

}


@Schema({ collection: 'payment_methods', timestamps: true })
export class PaymentMethodDocument extends Document {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    type: string

    @Prop({ required: true })
    icon: string;

    @Prop()
    banking?: PaymentBankingDocument;

    @Prop({ required: true })
    status: boolean;


    @Prop({ default: false })
    isDefault: boolean;
}

export const PaymentMethodSchema = SchemaFactory.createForClass(PaymentMethodDocument);
