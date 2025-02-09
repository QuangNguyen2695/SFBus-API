import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSeatTypeDto } from './dto/create-seat-type.dto';
import { SeatTypeDto } from './dto/seat-type.dto';
import { SeatTypeDocument } from './schema/seat-type.schema';

@Injectable()
export class SeatTypeService {
  constructor(@InjectModel(SeatTypeDocument.name) private readonly seatType: Model<SeatTypeDto>) { }

  async create(createSeatTypeDto: CreateSeatTypeDto): Promise<SeatTypeDto> {
    const createSeatType = new this.seatType(createSeatTypeDto);
    return createSeatType.save();
  }

  async findAll(): Promise<SeatTypeDto[]> {
    return this.seatType.find().exec();
  }
}
