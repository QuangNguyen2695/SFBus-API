import { Types } from "mongoose";

export class CreateBusDto {
  name: string;
  licensePlate: string;
  description?: string;
  busTemplateId: Types.ObjectId;
  busServiceIds: Types.ObjectId[];
  busTypeId: Types.ObjectId;
}
