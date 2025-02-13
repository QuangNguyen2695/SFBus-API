import { Types } from "mongoose";
import { BusTemplateDto } from "../../bus-template/dto/bus-template.dto";

export class BusScheduleTemplateDto extends BusTemplateDto {
    busTemplateId: Types.ObjectId
}