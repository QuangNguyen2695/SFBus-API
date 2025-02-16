
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types, Document } from 'mongoose';

@Schema({ collection: 'bus_stations', timestamps: true })
export class BusStationDocument extends Document {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    detailAddress: string;

    @Prop({ required: true })
    location: string;

    @Prop({ required: true })
    provinceId: Types.ObjectId;
}

export const BusStationSchema = SchemaFactory.createForClass(BusStationDocument);
