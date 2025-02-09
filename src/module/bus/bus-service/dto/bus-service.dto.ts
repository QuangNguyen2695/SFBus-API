import { Document } from 'mongoose';

export interface BusServiceDto extends Document {
  readonly name: string
  readonly icon: string
}
