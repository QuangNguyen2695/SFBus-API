import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { plainToInstance } from 'class-transformer';
import { PaymentDocument } from './schema/payment.schema';
import { PaymentDto } from './dto/payment.dto';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { BookingService } from '../booking/booking-service';

@Injectable()
export class PaymentService {
  constructor(
    @InjectModel(PaymentDocument.name) private readonly paymentModel: Model<PaymentDocument>,
    private bookingService: BookingService,
  ) { }

  async create(createPaymentDto: CreatePaymentDto): Promise<PaymentDto> {
    const createPayment = new this.paymentModel(createPaymentDto);
    createPayment.status = 'Sucesss';

    this.bookingService.update(createPayment.bookingId.toString(), { status: 'paid' });

    const savedPayment = await createPayment.save();
    return plainToInstance(PaymentDto, savedPayment.toObject());
  }

  async findAll(): Promise<PaymentDto[]> {
    const Payments = await this.paymentModel.find().lean().exec();
    return Payments.map(Payment => plainToInstance(PaymentDto, Payment));
  }

  async findOne(id: string): Promise<PaymentDto> {
    const Payment = await this.paymentModel.findById(id).lean().exec();
    if (!Payment) {
      throw new NotFoundException(`payment with ID "${id}" not found.`);
    }
    return plainToInstance(PaymentDto, Payment);
  }

  async update(id: string, updatePaymentDto: UpdatePaymentDto): Promise<PaymentDto> {
    const updatedPayment = await this.paymentModel.findByIdAndUpdate(id, updatePaymentDto, { new: true }).exec();
    if (!updatedPayment) {
      throw new NotFoundException(`payment with ID "${id}" not found.`);
    }
    return plainToInstance(PaymentDto, updatedPayment.toObject());
  }

  async remove(id: string): Promise<void> {
    const result = await this.paymentModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`payment with ID "${id}" not found.`);
    }
  }

}
