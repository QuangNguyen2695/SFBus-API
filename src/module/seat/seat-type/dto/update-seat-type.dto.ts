import { PartialType } from '@nestjs/mapped-types';
import { Types } from 'mongoose';
import { CreateSeatTypeDto } from './create-seat-type.dto';

export class UpdateSeatTypeDto extends PartialType(CreateSeatTypeDto) {
    _id: Types.ObjectId;
}
