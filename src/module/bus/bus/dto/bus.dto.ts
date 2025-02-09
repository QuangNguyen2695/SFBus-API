// src/bus/interfaces/bus.interface.ts
import { Document, Types } from 'mongoose';

export class BusDto {
  name: string;
  serviceids: Types.ObjectId[];
  seatTypeId: Types.ObjectId;
  licensePlate: string;
  busTemplate: Types.ObjectId
}
