import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CounterDocument } from './schema/counter.schema';

@Injectable()
export class CounterService {
  constructor(
    @InjectModel(CounterDocument.name) private readonly counterModel: Model<CounterDocument>,
  ) { }

  async getNextSeatNumber(): Promise<number> {
    const counter = await this.counterModel.findOneAndUpdate(
      {},
      { $inc: { seatCounter: 1 } },
      { new: true, upsert: true }
    ).exec();

    if (!counter) {
      throw new NotFoundException('Counter not found.');
    }

    return counter.seatCounter;
  }
}