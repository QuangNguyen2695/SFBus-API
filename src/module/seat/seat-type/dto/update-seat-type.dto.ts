import { PartialType } from '@nestjs/mapped-types';
import { CreateSeatTypeDto } from './create-seat-type.dto';
import { Types } from 'mongoose';

export class UpdateSeatTypeDto extends PartialType(CreateSeatTypeDto) {
    readonly _id: Types.ObjectId;
}
