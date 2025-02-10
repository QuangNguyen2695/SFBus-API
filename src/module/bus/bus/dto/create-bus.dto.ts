import { Types } from "mongoose";

export class CreateBusDto {
  name: string;
  licensePlate: string;
  description?: string;
  busTemplate: Types.ObjectId;
  serviceIds: Types.ObjectId[];
  seatTypeId: Types.ObjectId;
}
