import { Types } from "mongoose";
import { CreateBusTemplateDto } from "../../bus-template/dto/create-bus-template.dto";
export class CreateBusScheduleTemplateDto extends CreateBusTemplateDto {
    busTemplateId: Types.ObjectId
}