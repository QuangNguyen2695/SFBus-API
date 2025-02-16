import { PartialType } from '@nestjs/mapped-types';
import { Types } from 'mongoose';
import { CreateBookingDto } from './create-bookingdto';

export class UpdateBookingDto extends PartialType(CreateBookingDto) {
    _id: Types.ObjectId;
}
