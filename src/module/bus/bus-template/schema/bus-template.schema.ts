// bus-template.schema.ts

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export class BusTemplateSeatDocument extends Document {
  @Prop({ required: true })
  index: number;

  @Prop({ required: true })
  type: Types.ObjectId;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  icon: string;

  @Prop({ required: true, default: 'available' })
  status: string;
}

export class BusTemplateSeatLayoutDocument extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, default: [] })
  seats: BusTemplateSeatDocument[];
}

@Schema({ collection: 'bus_templates' })
export class BusTemplateDocument extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, default: [] })
  seatLayouts: BusTemplateSeatLayoutDocument[];
}

export const BusTemplateSchema = SchemaFactory.createForClass(BusTemplateDocument);
