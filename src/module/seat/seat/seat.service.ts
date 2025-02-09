import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSeatDto } from './dto/create-seat.dto';
import { UpdateSeatDto } from './dto/update-seat.dto';
import { SeatDocument } from './schema/seat.schema';
import { SeatDto } from './dto/seat.dto';

@Injectable()
export class SeatService {
  constructor(@InjectModel(SeatDocument.name) private seatModel: Model<SeatDto>) { }

  async create(createSeatDto: CreateSeatDto): Promise<SeatDto> {
    const createdSeat = new this.seatModel(createSeatDto);
    return createdSeat.save();
  }

  async findAll(): Promise<SeatDto[]> {
    return this.seatModel.find().exec();
  }

  async findOne(id: string): Promise<SeatDto> {
    const seat = await this.seatModel.findOne({ id }).exec();
    if (!seat) {
      throw new NotFoundException(`Seat với ID "${id}" không tồn tại.`);
    }
    return seat;
  }

  async update(id: string, updateSeatDto: UpdateSeatDto): Promise<SeatDto> {
    const updatedSeat = await this.seatModel
      .findOneAndUpdate({ id }, updateSeatDto, { new: true })
      .exec();
    if (!updatedSeat) {
      throw new NotFoundException(`Seat với ID "${id}" không tồn tại.`);
    }
    return updatedSeat;
  }

  async remove(id: string): Promise<void> {
    const result = await this.seatModel.findOneAndDelete({ id }).exec();
    if (!result) {
      throw new NotFoundException(`Seat với ID "${id}" không tồn tại.`);
    }
  }
}
