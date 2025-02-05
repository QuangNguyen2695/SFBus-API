import { Document } from 'mongoose';

export interface BusProvince extends Document {
  readonly name: String;
}
