// dto/update-bus-template.dto.ts

import { PartialType } from '@nestjs/mapped-types';
import { CreateBusScheduleTemplateDto } from './create-bus-schedule-template.dto';
import { Types } from 'mongoose';
import { CreateBusTemplateSeatDto, CreateBusTemplateSeatLayoutDto } from '../../bus-template/dto/create-bus-template.dto';



export class UpdateBusTemplateSeatDto extends CreateBusTemplateSeatDto {
    _id: Types.ObjectId;
}

export class UpateBusTemplateSeatLayoutDto extends CreateBusTemplateSeatLayoutDto {
    seats: UpdateBusTemplateSeatDto[];
}


export class UpdateBusScheduleTemplateDto extends PartialType(CreateBusScheduleTemplateDto) {
    busTemplateId: Types.ObjectId
    seatLayouts: UpateBusTemplateSeatLayoutDto[];
}
