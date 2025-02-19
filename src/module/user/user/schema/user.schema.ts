// user.schema.ts

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';


export class UserAddressDocument extends Document {
  type: string;
  addressType: string
}

@Schema({ collection: 'users', timestamps: true })
export class UserDocument extends Document {
  @Prop({ required: true, unique: true })
  phoneNumber: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  name: string;

  @Prop()
  addresses?: UserAddressDocument[];

  @Prop({ enum: ['male', 'female', 'other'], default: 'other' })
  gender: string;

  @Prop()
  email: string;

  @Prop()
  birthdate?: Date;

  @Prop({ default: 'user' })
  role: string;

  @Prop({ required: true, default: true })
  isTempPassWord: boolean;

  createdAt: Date;

  updatedAt: Date;

  __v: number;
}

export const UserSchema = SchemaFactory.createForClass(UserDocument);
