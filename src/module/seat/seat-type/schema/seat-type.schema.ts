import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'seat_types' })
export class SeatTypeDocument extends Document {
    @Prop({ required: true })
    name: string;
}

export const SeatTypeSchema = SchemaFactory.createForClass(SeatTypeDocument);
