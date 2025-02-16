import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ collection: 'bookings', timestamps: true })
export class BookingDocument extends Document {
    @Prop({ required: true })
    busScheduleId: Types.ObjectId;

    @Prop({ required: true })
    userId: Types.ObjectId;

    @Prop({ required: true })
    seats: Types.ObjectId[];

    @Prop({ required: true })
    departure: string

    @Prop({ required: true })
    destination: string


    @Prop({ required: true })
    totalPrice: number;

    @Prop({ required: true })
    paymentTime?: Date; // Thêm trường thời gian thanh toán

    @Prop({ required: true })
    status: string;
}

export const BookingSchema = SchemaFactory.createForClass(BookingDocument);
