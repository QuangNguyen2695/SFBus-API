import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'bus_services', timestamps: true })
export class BusServiceDocument extends Document {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    icon: string;
}

export const BusServiceSchema = SchemaFactory.createForClass(BusServiceDocument);
