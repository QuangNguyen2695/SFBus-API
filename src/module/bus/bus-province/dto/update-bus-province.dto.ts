import { PartialType } from '@nestjs/mapped-types';
import { CreateBusProvinceDto } from './create-bus-province.dto';

export class UpdateBusProvinceDto extends PartialType(CreateBusProvinceDto) {}
