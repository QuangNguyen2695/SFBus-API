import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { plainToInstance } from 'class-transformer';
import { PaymentMethodDocument } from './schema/payment-method.schema';
import { CreatePaymentMethodDto } from './dto/create-payment-method.dto';
import { PaymentMethodDto } from './dto/payment-method.dto';
import { UpdatePaymentMethodDto } from './dto/update-payment-method.dto';

@Injectable()
export class PaymentMethodService {
  constructor(
    @InjectModel(PaymentMethodDocument.name) private readonly paymentMethodModel: Model<PaymentMethodDocument>,
  ) { }

  async create(createPaymentMethodDto: CreatePaymentMethodDto): Promise<PaymentMethodDto> {
    const createPayment = new this.paymentMethodModel(createPaymentMethodDto);
    const savedPayment = await createPayment.save();
    return plainToInstance(PaymentMethodDto, savedPayment.toObject());
  }

  async findAll(): Promise<PaymentMethodDto[]> {
    const Payments = await this.paymentMethodModel.find().lean().exec();
    return Payments.map(Payment => plainToInstance(PaymentMethodDto, Payment));
  }

  async findOne(id: string): Promise<PaymentMethodDto> {
    const Payment = await this.paymentMethodModel.findById(id).lean().exec();
    if (!Payment) {
      throw new NotFoundException(`payment with ID "${id}" not found.`);
    }
    return plainToInstance(PaymentMethodDto, Payment);
  }

  async update(id: string, updatePaymentMethodDto: UpdatePaymentMethodDto): Promise<PaymentMethodDto> {
    const updatedPayment = await this.paymentMethodModel.findByIdAndUpdate(id, updatePaymentMethodDto, { new: true }).exec();
    if (!updatedPayment) {
      throw new NotFoundException(`payment with ID "${id}" not found.`);
    }
    return plainToInstance(PaymentMethodDto, updatedPayment.toObject());
  }

  async remove(id: string): Promise<void> {
    const result = await this.paymentMethodModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`payment with ID "${id}" not found.`);
    }
  }

}
