import { Schema } from 'mongoose';

export const SeatTypeSchema = new Schema({
    id: String,
    name: String,
    icon: String,
});