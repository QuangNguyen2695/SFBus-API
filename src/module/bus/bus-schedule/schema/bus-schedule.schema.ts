import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types, Document } from 'mongoose';

export class BusScheduleBreakPointsTimeDocument extends Document {
    @Prop({ required: true, ref: 'bus_stations' })
    busStationId: Types.ObjectId
    timeSchedule: Date
}

@Schema({ collection: 'bus_schedules', timestamps: true },)
export class BusScheduleDocument extends Document {

    @Prop({ required: true, ref: 'buses' })
    busId: Types.ObjectId

    @Prop({ required: true, ref: 'bus_routes' })
    busRouteId: Types.ObjectId

    @Prop({ required: true })
    breakPointsTime: BusScheduleBreakPointsTimeDocument[]

    @Prop({ required: true, enum: ['scheduled', 'in_progress', 'completed', 'cancelled'], default: 'scheduled' })
    status: String
}

export const BusScheduleSchema = SchemaFactory.createForClass(BusScheduleDocument);
