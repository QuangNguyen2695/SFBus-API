import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SeatTypeDto } from './dto/seat-type.dto';
import { CreateSeatTypeDto } from './dto/create-seat-type.dto';
import { SeatTypeDocument } from './schema/seat-type.schema';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class SeatTypeService {
  constructor(@InjectModel(SeatTypeDocument.name) private readonly seatTypeModel: Model<SeatTypeDocument>) { }

  async create(createSeatTypeDto: CreateSeatTypeDto): Promise<SeatTypeDto> {
    const createSeatType = new this.seatTypeModel(createSeatTypeDto);
    return plainToInstance(SeatTypeDto, createSeatType.toObject());
  }

  async findAll(): Promise<SeatTypeDto[]> {
    const SeatTypes = await this.seatTypeModel.find().lean().exec();
    return plainToInstance(SeatTypeDto, SeatTypes);
  }

  async findOne(id: string): Promise<SeatTypeDto> {
    const SeatType = await this.seatTypeModel.findById(id).lean().exec();
    return plainToInstance(SeatTypeDto, SeatType);
  }
}
