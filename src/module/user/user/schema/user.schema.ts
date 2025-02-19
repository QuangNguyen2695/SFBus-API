// user.schema.ts

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'users', timestamps: true })
export class UserDocument extends Document {
    @Prop({ required: true, unique: true })
    phoneNumber: string;

    @Prop({ required: true })
    password: string;

    @Prop({ required: true })
    name: string;

    @Prop()
    address?: string;

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
}

export const UserSchema = SchemaFactory.createForClass(UserDocument);
