import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { BusTypeDto, SearchBusTypesRes } from './dto/bus-type.dto';
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

  async update(updateBusTypeDto: UpdateBusTypeDto): Promise<BusTypeDto> {
    const updatedBusType = await this.busTypeModel.findByIdAndUpdate(updateBusTypeDto._id, updateBusTypeDto, { new: true }).exec();
    if (!updatedBusType) {
      throw new NotFoundException(`Bus type with ID "${updateBusTypeDto._id}" not found.`);
    }
    return plainToInstance(BusTypeDto, updatedBusType.toObject());
  }

  async delete(id: Types.ObjectId): Promise<boolean> {
    const result = await this.busTypeModel.findByIdAndDelete(id).exec();
    return result !== null;
  }

  async search(pageIdx: number, pageSize: number, keyword: string, sortBy: string): Promise<SearchBusTypesRes> {
    const skip = pageIdx ? (pageIdx - 1) * pageSize : 0;
    const query = keyword
      ? {
        $and: [
          { $or: [{ name: { $regex: keyword, $options: 'i' } }] },
        ],
      }
      : {};

    { };


    const busTypes = await this.busTypeModel
      .find(query)
      .skip(skip)
      .limit(pageSize || 999)
      .sort(sortBy === 'desc' ? { 'createdAt': 1 } : { 'createdAt': -1 })
      .exec();

    const totalItem = await this.busTypeModel.countDocuments(query);

    const result = plainToInstance(BusTypeDto, busTypes.map(busType => busType.toObject()));

    return {
      pageIdx,
      busTypes: result,
      totalPage: Math.ceil(totalItem / pageSize),
      totalItem
    };
  }
}
