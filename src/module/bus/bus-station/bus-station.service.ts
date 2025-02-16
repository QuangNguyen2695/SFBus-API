import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBusStationDto } from './dto/create-bus-station.dto';
import { UpdateBusStationDto } from './dto/update-bus-station.dto';
import { BusStationDto } from './dto/bus-station.dto';
import { BusStationDocument } from './schema/bus-station.schema';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class BusStationService {
  constructor(@InjectModel(BusStationDocument.name) private readonly busStationModel: Model<BusStationDocument>) { }

  async create(createBusStationDto: CreateBusStationDto): Promise<BusStationDto> {
    const createdBusStation = new this.busStationModel(createBusStationDto);
    const savedBusStation = await createdBusStation.save();
    return plainToInstance(BusStationDto, savedBusStation.toObject());
  }

  async findAll(): Promise<BusStationDto[]> {
    const busStations = await this.busStationModel.find().exec();
    return busStations.map(busStation => plainToInstance(BusStationDto, busStation.toObject()));
  }

  async findOne(id: string): Promise<BusStationDto> {
    const busStation = await this.busStationModel.findById(id).exec();
    if (!busStation) {
      throw new NotFoundException(`Bus station with ID "${id}" not found.`);
    }
    return plainToInstance(BusStationDto, busStation.toObject());
  }

  async update(id: string, updateBusStationDto: UpdateBusStationDto): Promise<BusStationDto> {
    const updatedBusStation = await this.busStationModel.findByIdAndUpdate(id, updateBusStationDto, { new: true }).exec();
    if (!updatedBusStation) {
      throw new NotFoundException(`Bus station with ID "${id}" not found.`);
    }
    return plainToInstance(BusStationDto, updatedBusStation.toObject());
  }
}
