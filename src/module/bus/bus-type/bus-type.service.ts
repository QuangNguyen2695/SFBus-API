import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BusTypeDto } from './dto/bus-type.dto';
import { CreateBusTypeDto } from './dto/create-bus-type.dto';
import { UpdateBusTypeDto } from './dto/update-bus-type.dto';
import { BusTypeDocument } from './schema/bus-type.schema';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class BusTypeService {
  constructor(@InjectModel(BusTypeDocument.name) private readonly busTypeModel: Model<BusTypeDocument>) { }

  async create(createBusTypeDto: CreateBusTypeDto): Promise<BusTypeDto> {
    const createBusType = new this.busTypeModel(createBusTypeDto);
    const savedBusType = await createBusType.save();
    return plainToInstance(BusTypeDto, savedBusType.toObject());
  }

  async findAll(): Promise<BusTypeDto[]> {
    const busTypes = await this.busTypeModel.find().lean().exec();
    return busTypes.map(busType => plainToInstance(BusTypeDto, busType));
  }

  async findOne(id: string): Promise<BusTypeDto> {
    const busType = await this.busTypeModel.findById(id).lean().exec();
    if (!busType) {
      throw new NotFoundException(`Bus type with ID "${id}" not found.`);
    }
    return plainToInstance(BusTypeDto, busType);
  }

  async update(id: string, updateBusTypeDto: UpdateBusTypeDto): Promise<BusTypeDto> {
    const updatedBusType = await this.busTypeModel.findByIdAndUpdate(id, updateBusTypeDto, { new: true }).exec();
    if (!updatedBusType) {
      throw new NotFoundException(`Bus type with ID "${id}" not found.`);
    }
    return plainToInstance(BusTypeDto, updatedBusType.toObject());
  }

  async remove(id: string): Promise<void> {
    const result = await this.busTypeModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`Bus type with ID "${id}" not found.`);
    }
  }
}
