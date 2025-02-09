import { Types } from "mongoose";
import { Document } from 'mongoose';

export class UserDto extends Document {
    _id: Types.ObjectId;
    username: string;
    password: string;
    name: string;
    address?: string;
    gender: string;
    email: string;
    phoneNumber?: string;
    birthdate?: Date;
    role: string;
}