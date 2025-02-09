import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBusRouteDto } from './dto/create-bus-route.dto';
import { UpdateBusRouteDto } from './dto/update-bus-route.dto';
import { BusRouteDto } from './dto/bus-route.dto';
import { BusRouteDocument } from './schema/bus-route.schema';

@Injectable()
export class BusRouteService {
  constructor(@InjectModel(BusRouteDocument.name) private readonly busRouteModel: Model<BusRouteDto>) { }

  async create(createBusRouteDto: CreateBusRouteDto): Promise<BusRouteDto> {
    const createdBusroute = new this.busRouteModel(createBusRouteDto);
    return createdBusroute.save();
  }

  async findAll(): Promise<BusRouteDto[]> {
    return this.busRouteModel.find().exec();
  }

  async findOne(id: string): Promise<BusRouteDto> {
    return this.busRouteModel.findById(id).exec();
  }

  async update(id: string, updateBusRouteDto: UpdateBusRouteDto): Promise<BusRouteDto> {
    return this.busRouteModel.findByIdAndUpdate(id, updateBusRouteDto, { new: true }).exec();
  }
}
