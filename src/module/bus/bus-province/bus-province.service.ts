import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBusProvinceDto } from './dto/create-bus-province.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BusProvinceDto } from './dto/bus-province.dto';
import { UpdateBusProvinceDto } from './dto/update-bus-province.dto';
import { BusProvinceDocument } from './schema/bus-schema.schema';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class BusProvinceService {
  constructor(@InjectModel(BusProvinceDocument.name) private readonly busProvinceModel: Model<BusProvinceDocument>) { }

  async create(createBusProvinceDto: CreateBusProvinceDto): Promise<BusProvinceDto> {
    const createBusProvince = new this.busProvinceModel(createBusProvinceDto);
    const savedBusProvince = await createBusProvince.save();
    return plainToInstance(BusProvinceDto, savedBusProvince.toObject());
  }

  async findAll(): Promise<BusProvinceDto[]> {
    const busProvinces = await this.busProvinceModel.find().exec();
    return busProvinces.map(busProvince => plainToInstance(BusProvinceDto, busProvince.toObject()));
  }

  async findOne(id: string): Promise<BusProvinceDto> {
    const busProvince = await this.busProvinceModel.findById(id).exec();
    if (!busProvince) {
      throw new NotFoundException('Bus province not found');
    }
    return plainToInstance(BusProvinceDto, busProvince.toObject());
  }

  async update(id: string, updateBusProvinceDto: UpdateBusProvinceDto): Promise<BusProvinceDto> {
    const updatedBusProvince = await this.busProvinceModel.findByIdAndUpdate(id, updateBusProvinceDto, { new: true }).exec();
    if (!updatedBusProvince) {
      throw new NotFoundException('Bus province not found');
    }
    return plainToInstance(BusProvinceDto, updatedBusProvince.toObject());
  }
}
