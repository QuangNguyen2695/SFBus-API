
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'bus_provinces', timestamps: true })
export class BusProvinceDocument extends Document {
    @Prop({ required: true })
    name: string;
}

export const BusProvinceSchema = SchemaFactory.createForClass(BusProvinceDocument);