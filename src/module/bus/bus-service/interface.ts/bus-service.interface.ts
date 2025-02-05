import { Document, Types } from 'mongoose';

export interface BusService extends Document {
  readonly name: string
  readonly icon: string
}
