import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ collection: 'payments', timestamps: true })
export class PaymentDocument extends Document {
    @Prop({ required: true })
    bookingIds: Types.ObjectId[];

    @Prop({ required: true })
    userId: Types.ObjectId;

    @Prop()
    promotionId?: Types.ObjectId;

    @Prop({ required: true })
    totalPrice: number;

    @Prop({ required: true })
    paymentMethodId: Types.ObjectId;

    @Prop({ required: true, default: 'Success' })
    status: string;
}

export const PaymentSchema = SchemaFactory.createForClass(PaymentDocument);
