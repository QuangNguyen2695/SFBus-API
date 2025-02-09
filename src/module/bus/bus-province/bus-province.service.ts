import { Injectable } from '@nestjs/common';
import { CreateBusProvinceDto } from './dto/create-bus-province.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BusProvinceDto } from './dto/bus-province.dto';
import { UpdateBusProvinceDto } from './dto/update-bus-province.dto';
import { BusProvinceDocument } from './schema/bus-schema.schema';

@Injectable()
export class BusProvinceService {
  constructor(@InjectModel(BusProvinceDocument.name) private readonly busProvinceModel: Model<BusProvinceDto>) { }

  async create(createBusProvinceDto: CreateBusProvinceDto): Promise<BusProvinceDto> {
    const createBusProvince = new this.busProvinceModel(createBusProvinceDto);
    return createBusProvince.save();
  }

  async findAll(): Promise<BusProvinceDto[]> {
    return this.busProvinceModel.find().exec();
  }

  async findOne(id: string): Promise<BusProvinceDto> {
    return this.busProvinceModel.findById(id).exec();
  }

  async update(id: string, updateBusProvinceDto: UpdateBusProvinceDto): Promise<BusProvinceDto> {
    return this.busProvinceModel.findByIdAndUpdate(id, updateBusProvinceDto, { new: true }).exec();
  }
}
