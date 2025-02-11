import { PartialType } from '@nestjs/mapped-types';
import { Types } from 'mongoose';
import { CreateBusTypeDto } from './create-bus-type.dto';

export class UpdateBusTypeDto extends PartialType(CreateBusTypeDto) {
    readonly _id: Types.ObjectId;
}
