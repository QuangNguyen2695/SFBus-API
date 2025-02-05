import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBusServiceDto } from './dto/create-bus-service.dto';
import { BusService } from './interface.ts/bus-service.interface';
import { UpdateBusServiceDto } from './dto/update-bus-service.dto';

@Injectable()
export class BusServiceService {
  constructor(@InjectModel('BusService') private readonly busServiceModel: Model<BusService>) { }

  async create(createBusServiceDto: CreateBusServiceDto): Promise<BusService> {
    const createdBusService = new this.busServiceModel(createBusServiceDto);
    return createdBusService.save();
  }

  async findAll(): Promise<BusService[]> {
    return this.busServiceModel.find().exec();
  }

  async findOne(id: string): Promise<BusService> {
    return this.busServiceModel.findById(id).exec();
  }

  async update(id: string, updateBusServiceDto: UpdateBusServiceDto): Promise<BusService> {
    return this.busServiceModel.findByIdAndUpdate(id, updateBusServiceDto, { new: true }).exec();
  }
}
