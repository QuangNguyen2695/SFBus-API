import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBusRouteDto } from './dto/create-bus-route.dto';
import { UpdateBusRouteDto } from './dto/update-bus-route.dto';
import { BusRouteDto } from './dto/bus-route.dto';
import { BusRouteDocument } from './schema/bus-route.schema';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class BusRouteService {
  constructor(@InjectModel(BusRouteDocument.name) private readonly busRouteModel: Model<BusRouteDocument>) { }

  async create(createBusRouteDto: CreateBusRouteDto): Promise<BusRouteDto> {
    const createdBusroute = new this.busRouteModel(createBusRouteDto);
    const savedBusRoute = await createdBusroute.save();
    return plainToInstance(BusRouteDto, savedBusRoute.toObject());
  }

  async findAll(): Promise<BusRouteDto[]> {
    const busRoutes = await this.busRouteModel.find().exec();
    return busRoutes.map(busRoute => plainToInstance(BusRouteDto, busRoute.toObject()));
  }

  async findOne(id: string): Promise<BusRouteDto> {
    const busRoute = await this.busRouteModel.findById(id).exec();
    if (!busRoute) {
      throw new NotFoundException('Bus route not found');
    }
    return plainToInstance(BusRouteDto, busRoute.toObject());
  }

  async update(id: string, updateBusRouteDto: UpdateBusRouteDto): Promise<BusRouteDto> {
    const updatedBusRoute = await this.busRouteModel.findByIdAndUpdate(id, updateBusRouteDto, { new: true }).exec();
    if (!updatedBusRoute) {
      throw new NotFoundException('Bus route not found');
    }
    return plainToInstance(BusRouteDto, updatedBusRoute.toObject());
  }
}
