import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBusStationDto } from './dto/create-bus-station.dto';
import { UpdateBusStationDto } from './dto/update-bus-station.dto';
import { BusStationDto } from './dto/bus-station.dto';
import { BusStationDocument } from './schema/bus-station.schema';

@Injectable()
export class BusStationService {
  constructor(@InjectModel(BusStationDocument.name) private readonly busStationModel: Model<BusStationDocument>) { }

  async create(createBusStationDto: CreateBusStationDto): Promise<BusStationDto> {
    const createdBusStation = new this.busStationModel(createBusStationDto);
    return createdBusStation.save();
  }

  async findAll(): Promise<BusStationDto[]> {
    return this.busStationModel.find().exec();
  }

  async findOne(id: string): Promise<BusStationDto> {
    return this.busStationModel.findById(id).exec();
  }

  async update(id: string, updateBusStationDto: UpdateBusStationDto): Promise<BusStationDto> {
    return this.busStationModel.findByIdAndUpdate(id, updateBusStationDto, { new: true }).exec();
  }
}
