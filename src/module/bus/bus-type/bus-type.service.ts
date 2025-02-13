import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BusTypeDto } from './dto/bus-type.dto';
import { CreateBusTypeDto } from './dto/create-bus-type.dto';
import { BusTypeDocument } from './schema/bus-type.schema';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class BusTypeService {
  constructor(@InjectModel(BusTypeDocument.name) private readonly busType: Model<BusTypeDto>) { }

  async create(createBusTypeDto: CreateBusTypeDto): Promise<BusTypeDto> {
    const createBusType = new this.busType(createBusTypeDto);
    return createBusType.save();
  }

  async findAll(): Promise<BusTypeDto[]> {
    const busTypes = await this.busType.find().lean().exec();
    return plainToInstance(BusTypeDto, busTypes);
  }

  async findOne(id: string): Promise<BusTypeDto> {
    const busType = await this.busType.findById(id).lean().exec();
    return plainToInstance(BusTypeDto, busType);
  }
}
