import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SeatTypeDto } from './dto/seat-type.dto';
import { CreateSeatTypeDto } from './dto/create-seat-type.dto';
import { SeatTypeDocument } from './schema/seat-type.schema';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class SeatTypeService {
  constructor(@InjectModel(SeatTypeDocument.name) private readonly seatType: Model<SeatTypeDto>) { }

  async create(createSeatTypeDto: CreateSeatTypeDto): Promise<SeatTypeDto> {
    const createSeatType = new this.seatType(createSeatTypeDto);
    return createSeatType.save();
  }

  async findAll(): Promise<SeatTypeDto[]> {
    const SeatTypes = await this.seatType.find().lean().exec();
    return plainToInstance(SeatTypeDto, SeatTypes);
  }

  async findOne(id: string): Promise<SeatTypeDto> {
    const SeatType = await this.seatType.findById(id).lean().exec();
    return plainToInstance(SeatTypeDto, SeatType);
  }
}
