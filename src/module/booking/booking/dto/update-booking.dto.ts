import { PartialType } from '@nestjs/mapped-types';
import { Types } from 'mongoose';
import { CreateBookingDto } from './create-booking.dto';

export class UpdateBookingDto extends PartialType(CreateBookingDto) {
}
