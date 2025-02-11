import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ collection: 'buses', timestamps: true })
export class BusDocument extends Document {
    @Prop({ required: true })
    name: String

    @Prop({ required: true, ref: 'bus_services' })
    busServiceIds: Types.ObjectId[]


    @Prop({ required: true, ref: 'seat_types' })
    busTypeId: Types.ObjectId

    @Prop({ required: true })
    licensePlate: String // Biển số xe

    @Prop({ required: true, ref: 'bus_template', })
    busTemplateId: Types.ObjectId
}
export const BusSchema = SchemaFactory.createForClass(BusDocument);
