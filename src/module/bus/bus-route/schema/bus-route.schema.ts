import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types, Document } from 'mongoose';

export class BreakPointsDocument extends Document {
    @Prop({ required: true })
    busStationId: Types.ObjectId
    notes: String
}

@Schema({ collection: 'bus_routes', timestamps: true })
export class BusRouteDocument extends Document {

    @Prop({ required: true })
    name: String

    @Prop({ required: true })
    breakPoints: [BreakPointsDocument]

    @Prop({ required: true })
    distance: Number

    @Prop({ required: true })
    distanceTime: String

    notes: String
}

export const BusRouteSchema = SchemaFactory.createForClass(BusRouteDocument);
