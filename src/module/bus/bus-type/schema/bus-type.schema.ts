import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'bus_types', timestamps: true })
export class BusTypeDocument extends Document {
    @Prop({ required: true })
    name: string;
}

export const BusTypeSchema = SchemaFactory.createForClass(BusTypeDocument);
