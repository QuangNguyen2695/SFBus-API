import { Injectable } from '@nestjs/common';
import { CreateBusProvinceDto } from './dto/create-bus-province.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BusProvince } from './interface.ts/bus-province.interface';
import { UpdateBusProvinceDto } from './dto/update-bus-province.dto';

@Injectable()
export class BusProvinceService {
  constructor(@InjectModel('BusProvince') private readonly busProvinceModel: Model<BusProvince>) { }

  async create(createBusProvinceDto: CreateBusProvinceDto): Promise<BusProvince> {
    const createBusProvince = new this.busProvinceModel(createBusProvinceDto);
    return createBusProvince.save();
  }

  async findAll(): Promise<BusProvince[]> {
    return this.busProvinceModel.find().exec();
  }

  async findOne(id: string): Promise<BusProvince> {
    return this.busProvinceModel.findById(id).exec();
  }

  async update(id: string, updateBusProvinceDto: UpdateBusProvinceDto): Promise<BusProvince> {
    return this.busProvinceModel.findByIdAndUpdate(id, updateBusProvinceDto, { new: true }).exec();
  }
}
