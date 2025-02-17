import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export class BookingSeatDocument extends Document {
    @Prop({ required: true })
    _id: Types.ObjectId;

    @Prop({ required: true })
    name: string;
}

@Schema({ collection: 'bookings', timestamps: true })
export class BookingDocument extends Document {
    @Prop({ required: true })
    bookingNumber: string;

    @Prop({ required: true })
    busScheduleId: Types.ObjectId;

    @Prop({ required: true })
    userId: Types.ObjectId;

    @Prop({ required: true })
    seats: BookingSeatDocument[];

    @Prop({ required: true })
    departure: Types.ObjectId

    @Prop({ required: true })
    destination: Types.ObjectId


    @Prop({ required: true })
    totalPrice: number;

    @Prop({ required: true })
    paymentTime?: Date; // Thêm trường thời gian thanh toán

    @Prop({ required: true })
    status: string;
}

export const BookingSchema = SchemaFactory.createForClass(BookingDocument);
