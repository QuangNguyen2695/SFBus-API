import { Schema } from 'mongoose';

export const BusSchema = new Schema({
    name: String,
    age: Number,
    breed: String,
});