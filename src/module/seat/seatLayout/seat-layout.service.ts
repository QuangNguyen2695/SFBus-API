// seat-layout.service.ts

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSeatLayoutDto } from './dto/create-seat-layout.dto';
import { UpdateSeatLayoutDto } from './dto/update-seat-layout.dto';
import { SeatLayoutDocument } from './schema/seat-layout.schema';
import { SeatLayoutDto } from './dto/seat-layout.dto';

@Injectable()
export class SeatLayoutService {
    constructor(
        @InjectModel(SeatLayoutDocument.name) private seatLayoutModel: Model<SeatLayoutDto>,
    ) { }

    async create(
        createSeatLayoutDto: CreateSeatLayoutDto,
    ): Promise<SeatLayoutDto> {
        const createdSeatLayout = new this.seatLayoutModel(createSeatLayoutDto);
        return createdSeatLayout.save();
    }

    async findAll(): Promise<SeatLayoutDto[]> {
        return this.seatLayoutModel.find().populate('seats').exec();
    }

    async findOne(id: string): Promise<SeatLayoutDto> {
        const seatLayout = await this.seatLayoutModel
            .findById(id)
            .populate('seats')
            .exec();
        if (!seatLayout) {
            throw new NotFoundException(`SeatLayout với ID "${id}" không tồn tại.`);
        }
        return seatLayout;
    }

    async update(
        id: string,
        updateSeatLayoutDto: UpdateSeatLayoutDto,
    ): Promise<SeatLayoutDto> {
        const updatedSeatLayout = await this.seatLayoutModel
            .findByIdAndUpdate(id, updateSeatLayoutDto, { new: true })
            .populate('seats')
            .exec();
        if (!updatedSeatLayout) {
            throw new NotFoundException(`SeatLayout với ID "${id}" không tồn tại.`);
        }
        return updatedSeatLayout;
    }

    async remove(id: string): Promise<void> {
        const result = await this.seatLayoutModel.findByIdAndDelete(id).exec();
        if (!result) {
            throw new NotFoundException(`SeatLayout với ID "${id}" không tồn tại.`);
        }
    }
}
