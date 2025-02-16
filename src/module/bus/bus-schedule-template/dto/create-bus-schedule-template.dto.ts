import { Types } from "mongoose";
import { CreateBusTemplateDto, CreateBusTemplateSeatDto, CreateBusTemplateSeatLayoutDto } from "../../bus-template/dto/create-bus-template.dto";

export class CreateBusScheduleTemplateDto extends CreateBusTemplateDto {
    busTemplateId: Types.ObjectId
}