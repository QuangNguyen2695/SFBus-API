import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types, Document } from 'mongoose';
import { BusRouteBreakPointsDocument, BusRouteDocument } from '../../bus-route/schema/bus-route.schema';
import { BusProvinceDocument } from '../../bus-province/schema/bus-schema.schema';

export class BusScheduleRouteDocument extends BusRouteDocument {
    @Prop({ required: true })
    breakPoints: [BusRouteScheduleBreakPointsDocument]
}

export class BusRouteScheduleBreakPointsDocument extends BusRouteBreakPointsDocument {
    @Prop({ required: true })
    timeSchedule: Date;

    @Prop({ required: true })
    provinceId: Types.ObjectId;

    @Prop({ required: true })
    province: BusProvinceDocument;

    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    detailAddress: string;

    @Prop({ required: true })
    location: string;
}

@Schema({ collection: 'bus_schedules', timestamps: true },)
export class BusScheduleDocument extends Document {

    @Prop({ required: true, ref: 'buses' })
    busId: Types.ObjectId

    @Prop({ required: true, ref: 'bus_routes' })
    busRouteId: Types.ObjectId

    @Prop({ required: true, ref: 'bus_routes' })
    busRoute: BusScheduleRouteDocument

    @Prop({ required: true })
    busScheduleTemplateId: Types.ObjectId

    @Prop({ required: true })
    price: number

    @Prop({ required: true })
    remainSeat: number

    @Prop({ required: true, enum: ['scheduled', 'in_progress', 'completed', 'cancelled'], default: 'scheduled' })
    status: String
}

export const BusScheduleSchema = SchemaFactory.createForClass(BusScheduleDocument);
