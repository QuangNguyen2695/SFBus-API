import { Document } from 'mongoose';

export interface SeatType extends Document {
  readonly id: String;
  readonly name: String;
  readonly icon: String;
}
