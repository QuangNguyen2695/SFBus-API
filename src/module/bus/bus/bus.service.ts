import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateBusDto } from './dto/create-bus.dto';
import { BusDto } from './dto/bus.dto';
import { Model, Types } from 'mongoose';
import { BusDocument } from './schema/bus.schema';
import { BusServiceService } from '../bus-service/bus-service.service';
import { BusTypeService } from '../bus-type/bus-type.service';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class BusService {
  constructor(@InjectModel(BusDocument.name) private readonly busModel: Model<BusDto>,
    private readonly busServiceService: BusServiceService,
    private readonly busTypeService: BusTypeService) { }

  async create(createBusDto: CreateBusDto): Promise<BusDto> {
    const createdBus = new this.busModel(createBusDto);
    return createdBus.save();
  }

  async findOne(id: string): Promise<BusDto> {
    const bus = await this.busModel.findById(id).lean().exec();

    if (bus) {
      const allServices = await this.busServiceService.findAll();

      const busType = await this.busTypeService.findOne(bus.busTypeId.toString());

      const busServices = allServices.filter(service =>
        bus.busServiceIds.map(id => id.toString()).includes(service._id.toString())
      );

      bus.busType = busType;
      bus.busServices = busServices;
      return plainToInstance(BusDto, bus);
    }
  }

  async findAll(): Promise<BusDto[]> {
    return this.busModel.find().exec();
  }
}
