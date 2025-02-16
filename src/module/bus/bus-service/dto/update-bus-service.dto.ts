import { PartialType } from '@nestjs/mapped-types';
import { CreateBusServiceDto } from './create-bus-service.dto';

export class UpdateBusServiceDto extends PartialType(CreateBusServiceDto) { }
