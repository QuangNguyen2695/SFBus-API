import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBusStationDto } from './dto/create-bus-station.dto';
import { BusStation } from './interface.ts/bus-station.interface';
import { UpdateBusStationDto } from './dto/update-bus-station.dto';

@Injectable()
export class BusStationService {
  constructor(@InjectModel('BusStation') private readonly busStationModel: Model<BusStation>) { }

  async create(createBusStationDto: CreateBusStationDto): Promise<BusStation> {
    const createdBusStation = new this.busStationModel(createBusStationDto);
    return createdBusStation.save();
  }

  async findAll(): Promise<BusStation[]> {
    return this.busStationModel.find().exec();
  }

  async findOne(id: string): Promise<BusStation> {
    return this.busStationModel.findById(id).exec();
  }

  async update(id: string, updateBusStationDto: UpdateBusStationDto): Promise<BusStation> {
    return this.busStationModel.findByIdAndUpdate(id, updateBusStationDto, { new: true }).exec();
  }
}
