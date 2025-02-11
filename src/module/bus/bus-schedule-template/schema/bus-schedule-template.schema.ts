// bus-template.schema.ts

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BusTemplateDocument } from '../../bus-template/schema/bus-template.schema';

@Schema({ collection: 'bus_schedule_templates' })
export class BusScheduleTemplateDocument extends BusTemplateDocument {
}

export const BusScheduleTemplateSchema = SchemaFactory.createForClass(BusScheduleTemplateDocument);
