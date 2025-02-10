// dto/update-bus-template.dto.ts

import { PartialType } from '@nestjs/mapped-types';
import { CreateBusTemplateDto } from './create-bus-template.dto';

export class UpdateBusTemplateDto extends PartialType(CreateBusTemplateDto) { }
