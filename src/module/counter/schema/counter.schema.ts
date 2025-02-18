import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'counters', timestamps: true })
export class CounterDocument extends Document {
    @Prop({ required: true, default: 0 })
    seatCounter: number;
}

export const CounterSchema = SchemaFactory.createForClass(CounterDocument);