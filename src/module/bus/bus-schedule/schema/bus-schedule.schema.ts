import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types, Document } from 'mongoose';
import { BusTemplateDocument } from '../../bus-template/schema/bus-template.schema';

export class BusScheduleBreakPointsTimeDocument extends Document {
    @Prop({ required: true, ref: 'bus_stations' })
    busStationId: Types.ObjectId
    name: string
    detailAddress: string
    location: string
    provinceId: Types.ObjectId
    timeSchedule: Date
}

@Schema({ collection: 'bus_schedules', timestamps: true },)
export class BusScheduleDocument extends Document {

    @Prop({ required: true, ref: 'buses' })
    busId: Types.ObjectId

    @Prop({ required: true, ref: 'bus_routes' })
    busRouteId: Types.ObjectId

    @Prop({ required: true })
    breakPointsTime: BusScheduleBreakPointsTimeDocument[];

    @Prop({ required: true })
    busTemplatesId: Types.ObjectId

    @Prop({ required: true })
    busTemplates: BusTemplateDocument

    @Prop({ required: true })
    price: number

    @Prop({ required: true, enum: ['scheduled', 'in_progress', 'completed', 'cancelled'], default: 'scheduled' })
    status: String
}

export const BusScheduleSchema = SchemaFactory.createForClass(BusScheduleDocument);
