import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBusServiceDto } from './dto/create-bus-service.dto';
import { BusServiceDto } from './dto/bus-service.dto';
import { UpdateBusServiceDto } from './dto/update-bus-service.dto';
import { BusServiceDocument } from './schema/bus-service.schema';
import { plainToClass, plainToInstance } from 'class-transformer';

@Injectable()
export class BusServiceService {
  constructor(@InjectModel(BusServiceDocument.name) private readonly busServiceModel: Model<BusServiceDto>) { }

  async create(createBusServiceDto: CreateBusServiceDto): Promise<BusServiceDto> {
    const createdBusService = new this.busServiceModel(createBusServiceDto);
    return createdBusService.save();
  }

  async findAll(): Promise<BusServiceDto[]> {
    const busServices = await this.busServiceModel.find().lean().exec();
    return plainToInstance(BusServiceDto, busServices);
  }

  async findOne(id: string): Promise<BusServiceDto> {
    const busService = await this.busServiceModel.findById(id).lean().exec();
    return plainToInstance(BusServiceDto, busService);
  }

  async update(id: string, updateBusServiceDto: UpdateBusServiceDto): Promise<BusServiceDto> {
    return this.busServiceModel.findByIdAndUpdate(id, updateBusServiceDto, { new: true }).exec();
  }
}
