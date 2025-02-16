import { PartialType } from '@nestjs/mapped-types';
import { Types } from 'mongoose';
import { CreatePaymentMethodDto } from './create-payment-method.dto';

export class UpdatePaymentMethodDto extends PartialType(CreatePaymentMethodDto) {
    _id: Types.ObjectId;
}
