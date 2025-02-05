
import { Schema, Types } from 'mongoose';

export const BusStationSchema = new Schema({
    name: String,
    detailAddress: String,
    provinceId: Types.ObjectId,
});