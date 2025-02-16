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
import { BusService } from '../bus/bus.service';
import { plainToInstance } from 'class-transformer';
import { BusDto } from '../bus/dto/bus.dto';

@Injectable()
export class BusScheduleService {
  constructor(
    @InjectModel(BusScheduleDocument.name) private busScheduleModel: Model<BusScheduleDocument>,
    private readonly busService: BusService
  ) { }

  async create(createBusScheduleDto: CreateBusScheduleDto): Promise<BusScheduleDto> {
    const createdBusSchedule = new this.busScheduleModel(createBusScheduleDto);
    const savedBusSchedule = await createdBusSchedule.save();
    return plainToInstance(BusScheduleDto, savedBusSchedule.toObject());
  }

  async findAll(): Promise<BusScheduleDto[]> {
    const busSchedules = await this.busScheduleModel.find().exec();
    return busSchedules.map(busSchedule => plainToInstance(BusScheduleDto, busSchedule.toObject()));
  }

  async findOne(id: Types.ObjectId): Promise<BusScheduleDto> {
    const busSchedule = await this.busScheduleModel.findById(id).exec();
    if (!busSchedule) {
      throw new NotFoundException(`Không tìm thấy lịch trình xe buýt với ID ${id}`);
    }
    return plainToInstance(BusScheduleDto, busSchedule.toObject());
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
    return plainToInstance(BusScheduleDto, updatedBusSchedule.toObject());
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

    // Tìm kiếm các bus schedules
    const schedules = await this.busScheduleModel.find({
      'busRoute.breakPoints': {
        $elemMatch: {
          timeSchedule: { $gte: startOfDay, $lte: endOfDay },
          busStationId: new Types.ObjectId(query.departureId)
        }
      }
    }).lean().exec();

    const filteredSchedules = schedules.filter(schedule => {
      const departureIndex = schedule.busRoute.breakPoints.findIndex(point => point.busStationId.equals(new Types.ObjectId(query.departureId)));
      const destinationIndex = schedule.busRoute.breakPoints.findIndex(point => point.busStationId.equals(new Types.ObjectId(query.destinationId)));
      return departureIndex !== -1 && destinationIndex !== -1 && departureIndex < destinationIndex;
    });

    const busSchedules = await Promise.all(filteredSchedules.map(async (busSchedule) => {
      const bus = await this.busService.findOne(busSchedule.busId.toString());
      return {
        ...busSchedule,
        bus: plainToInstance(BusDto, bus),
      };
    }));
    return plainToInstance(BusScheduleDto, busSchedules);
  }
}
