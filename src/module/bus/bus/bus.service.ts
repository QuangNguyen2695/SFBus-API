import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateBusDto } from './dto/create-bus.dto';
import { BusDto } from './dto/bus.dto';
import { Model, Types } from 'mongoose';
import { BusDocument } from './schema/bus.schema';

@Injectable()
export class BusService {
  constructor(@InjectModel(BusDocument.name) private readonly busModel: Model<BusDto>) { }

  async create(createBusDto: CreateBusDto): Promise<BusDto> {
    const createdBus = new this.busModel(createBusDto);
    return createdBus.save();
  }

  async findOne(id: Types.ObjectId): Promise<BusDto> {
    return this.busModel.findById(id).exec();
  }

  async findAll(): Promise<BusDto[]> {
    return this.busModel.find().exec();
  }
}
