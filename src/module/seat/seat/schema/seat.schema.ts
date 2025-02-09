// seat.schema.ts

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'seats', timestamps: true })
export class SeatDocument extends Document {
  @Prop({ required: true })
  id: string;

  @Prop({ required: true })
  value: number;

  @Prop({ required: true })
  type: number;

  @Prop({ default: false })
  isEditing: boolean;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  icon: string;

  @Prop({ required: true, default: 'available' })
  status: string;
}

export const SeatSchema = SchemaFactory.createForClass(SeatDocument);
