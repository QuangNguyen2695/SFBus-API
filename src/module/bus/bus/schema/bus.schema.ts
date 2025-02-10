import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ collection: 'buses', timestamps: true })
export class BusDocument extends Document {
    @Prop({ required: true })
    name: String

    @Prop({ required: true, ref: 'bus_services' })
    serviceIds: Types.ObjectId[]


    @Prop({ required: true, ref: 'seat_types' })
    seatTypeId: Types.ObjectId

    @Prop({ required: true })
    licensePlate: String // Biển số xe

    @Prop({ required: true, ref: 'bus_template', })
    busTemplate: Types.ObjectId
}
export const BusSchema = SchemaFactory.createForClass(BusDocument);
