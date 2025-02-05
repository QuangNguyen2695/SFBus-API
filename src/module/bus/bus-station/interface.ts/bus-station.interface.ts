import { Document, Types } from 'mongoose';

export interface BusStation extends Document {
  readonly name: string
  readonly detailAddress: string
  readonly provinceId: Types.ObjectId
}
