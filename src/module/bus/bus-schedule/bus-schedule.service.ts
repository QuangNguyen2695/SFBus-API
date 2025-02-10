// src/bus-schedule/bus-schedule.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBusScheduleDto } from './dto/create-bus-schedule.dto';
import { UpdateBusScheduleDto } from './dto/update-bus-schedule.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Types } from 'mongoose';
import { BusScheduleDto, SearchBusScheduleQuery } from './dto/bus-schedule.dto';
import { BusScheduleDocument } from './schema/bus-schedule.schema';
import * as moment from 'moment-timezone';

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

  async searchBusSchedule(query: SearchBusScheduleQuery): Promise<BusScheduleDto[]> {
    // Chuyển đổi departureDate thành đối tượng Date và đặt múi giờ Việt Nam
    const departureDate = moment.tz(query.departureDate, 'YYYY-MM-DDTHH:mm:ss.SSSZ', 'Asia/Ho_Chi_Minh');

    if (!departureDate.isValid()) {
      throw new Error('Invalid departure date');
    }

    // Tính toán startOfDay và endOfDay theo múi giờ Việt Nam
    const startOfDay = departureDate.clone().startOf('day').tz('Asia/Ho_Chi_Minh').toDate();
    const endOfDay = departureDate.clone().endOf('day').tz('Asia/Ho_Chi_Minh').toDate();

    console.log('departureDate:', departureDate.format());
    console.log('startOfDay:', startOfDay);
    console.log('endOfDay:', endOfDay);

    // Tìm kiếm các bus schedules
    const schedules = await this.busScheduleModel.find({
      'breakPointsTime': {
        $elemMatch: {
          timeSchedule: { $gte: startOfDay, $lte: endOfDay },
          busStationId: new Types.ObjectId(query.departureId)
        }
      }
    }).exec();

    console.log('schedules:', schedules);

    const filteredSchedules = schedules.filter(schedule => {
      const departureIndex = schedule.breakPointsTime.findIndex(point => point.busStationId.equals(new Types.ObjectId(query.departureId)));
      const destinationIndex = schedule.breakPointsTime.findIndex(point => point.busStationId.equals(new Types.ObjectId(query.destinationId)));
      return departureIndex !== -1 && destinationIndex !== -1 && departureIndex < destinationIndex;
    });

    return filteredSchedules;
  }
}
