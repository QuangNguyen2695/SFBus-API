// dto/update-bus-template.dto.ts

import { PartialType } from '@nestjs/mapped-types';
import { CreateBusScheduleTemplateDto } from './create-bus-schedule-template.dto';

export class UpdateBusScheduleTemplateDto extends PartialType(CreateBusScheduleTemplateDto) { }
