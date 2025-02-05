import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSeatTypeDto } from './dto/create-seat-type.dto';
import { SeatType } from './interface.ts/seat-type.interface';

@Injectable()
export class SeatTypeService {
  constructor(@InjectModel('SeatType') private readonly seatType: Model<SeatType>) { }

  async create(createSeatTypeDto: CreateSeatTypeDto): Promise<SeatType> {
    const createSeatType = new this.seatType(createSeatTypeDto);
    return createSeatType.save();
  }

  async findAll(): Promise<SeatType[]> {
    return this.seatType.find().exec();
  }
}
