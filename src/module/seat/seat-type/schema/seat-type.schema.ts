import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'seat_types', timestamps: true })
export class SeatTypeDocument extends Document {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    icon: string;

    @Prop()
    blockIcon: string;

    @Prop()
    selectedIcon: string;

    @Prop()
    isChoose: boolean;
}

export const SeatTypeSchema = SchemaFactory.createForClass(SeatTypeDocument);
