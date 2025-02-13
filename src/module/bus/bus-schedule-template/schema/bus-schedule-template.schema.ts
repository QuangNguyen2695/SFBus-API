// bus-template.schema.ts

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BusTemplateDocument } from '../../bus-template/schema/bus-template.schema';
import { Types } from 'mongoose';

@Schema({ collection: 'bus_schedule_templates' })
export class BusScheduleTemplateDocument extends BusTemplateDocument {

    @Prop({ required: true, ref: 'bus_templates' })
    busTemplateId: Types.ObjectId
}

export const BusScheduleTemplateSchema = SchemaFactory.createForClass(BusScheduleTemplateDocument);
