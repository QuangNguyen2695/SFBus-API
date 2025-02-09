// bus-template.schema.ts

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ collection: 'bus_templates' })
export class BusTemplateDocument extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({
    type: [{ type: Types.ObjectId, ref: 'SeatLayout' }],
    default: [],
  })
  seatLayouts: Types.Array<Types.ObjectId>;
}

export const BusTemplateSchema = SchemaFactory.createForClass(BusTemplateDocument);
