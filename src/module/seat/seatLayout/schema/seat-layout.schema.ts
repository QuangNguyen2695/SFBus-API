import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { SeatDocument } from '../../seat/schema/seat.schema';

@Schema({ collection: 'seat_layouts', timestamps: true })
export class SeatLayoutDocument extends Document {
  @Prop({ required: true })
  id: number;

  @Prop({ required: true })
  name: string;

  @Prop({
    type: [{ type: Types.ObjectId, ref: 'Seat' }],
    default: [],
  })
  seats: SeatDocument[];
}

export const SeatLayoutSchema = SchemaFactory.createForClass(SeatLayoutDocument);
