import { Exclude, Expose } from 'class-transformer';
import { Date, Document, Types } from 'mongoose';

export class BusServiceDto {
  @Expose()
  _id: Types.ObjectId

  @Expose()
  name: string

  @Expose()
  icon: string

  @Exclude()
  createdAt: Date

  @Exclude()
  updatedAt: Date

  @Exclude()
  __v: number
}

