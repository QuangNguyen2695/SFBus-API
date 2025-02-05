import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateBusDto } from './dto/create-bus.dto';
import { Bus } from './interface.ts/bus.interface';
import { Model } from 'mongoose';

@Injectable()
export class BusService {
  constructor(@InjectModel('Bus') private readonly busModel: Model<Bus>) { }

  async create(createBusDto: CreateBusDto): Promise<Bus> {
    const createdBus = new this.busModel(createBusDto);
    return createdBus.save();
  }

  async findAll(): Promise<Bus[]> {
    return this.busModel.find().exec();
  }
}
