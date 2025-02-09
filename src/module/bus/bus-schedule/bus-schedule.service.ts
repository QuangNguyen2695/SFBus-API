// src/bus-schedule/bus-schedule.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBusScheduleDto } from './dto/create-bus-schedule.dto';
import { UpdateBusScheduleDto } from './dto/update-bus-schedule.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Types } from 'mongoose';
import { BusScheduleDto } from './dto/bus-schedule.dto';
import { BusScheduleDocument } from './schema/bus-schedule.schema';

@Injectable()
export class BusScheduleService {
  constructor(
    @InjectModel(BusScheduleDocument.name) private busScheduleModel: Model<BusScheduleDto>,
  ) { }

  async create(createBusScheduleDto: CreateBusScheduleDto): Promise<BusScheduleDto> {
    const createdBusSchedule = new this.busScheduleModel(createBusScheduleDto);
    return createdBusSchedule.save();
  }

  async findAll(): Promise<BusScheduleDto[]> {
    return this.busScheduleModel.find().exec();
  }

  async findOne(id: Types.ObjectId): Promise<BusScheduleDto> {
    const busSchedule = await this.busScheduleModel.findById(id).exec();
    if (!busSchedule) {
      throw new NotFoundException(`Không tìm thấy lịch trình xe buýt với ID ${id}`);
    }
    return busSchedule;
  }

  async update(
    id: Types.ObjectId,
    updateBusScheduleDto: UpdateBusScheduleDto,
  ): Promise<BusScheduleDto> {
    const updatedBusSchedule = await this.busScheduleModel
      .findByIdAndUpdate(id, updateBusScheduleDto, { new: true })
      .exec();
    if (!updatedBusSchedule) {
      throw new NotFoundException(`Không tìm thấy lịch trình xe buýt với ID ${id}`);
    }
    return updatedBusSchedule;
  }

  async remove(id: Types.ObjectId): Promise<void> {
    const result = await this.busScheduleModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`Không tìm thấy lịch trình xe buýt với ID ${id}`);
    }
  }
}
