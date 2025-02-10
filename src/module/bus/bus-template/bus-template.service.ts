// bus-template.service.ts

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { BusTemplateDocument } from './schema/bus-template.schema';
import { BusTemplateDto } from './dto/bus-template.dto';
import { CreateBusTemplateDto } from './dto/create-bus-template.dto';
import { UpdateBusTemplateDto } from './dto/update-bus-template.dto';

@Injectable()
export class BusTemplateService {
    constructor(
        @InjectModel(BusTemplateDocument.name) private busTemplateModel: Model<BusTemplateDto>,
    ) { }

    async create(createBusTemplateDto: CreateBusTemplateDto): Promise<BusTemplateDto> {

        const seatLayouts = createBusTemplateDto.seatLayouts.map(layout => {
            const seats = layout.seats.map(seat => ({
                ...seat,
                _id: new Types.ObjectId()
            }));
            return {
                ...layout,
                _id: new Types.ObjectId(),
                seats
            };
        });

        const createdBusTemplate = new this.busTemplateModel({
            ...createBusTemplateDto,
            seatLayouts
        });

        return createdBusTemplate.save();
    }

    async findAll(): Promise<BusTemplateDto[]> {
        return this.busTemplateModel.find().populate('seatLayouts').exec();
    }

    async findOne(id: string): Promise<BusTemplateDto> {
        const template = await this.busTemplateModel
            .findById(id)
            .populate('seatLayouts')
            .exec();

        if (!template) {
            throw new NotFoundException(`BusTemplate with ID "${id}" not found.`);
        }

        return template;
    }

    async update(
        id: string,
        updateBusTemplateDto: UpdateBusTemplateDto,
    ): Promise<BusTemplateDto> {
        const updatedTemplate = await this.busTemplateModel
            .findByIdAndUpdate(id, updateBusTemplateDto, { new: true })
            .populate('seatLayouts')
            .exec();

        if (!updatedTemplate) {
            throw new NotFoundException(`BusTemplate with ID "${id}" not found.`);
        }

        return updatedTemplate;
    }

    async remove(id: string): Promise<void> {
        const result = await this.busTemplateModel.findByIdAndDelete(id).exec();
        if (!result) {
            throw new NotFoundException(`BusTemplate with ID "${id}" not found.`);
        }
    }

    private async validateSeatLayouts(seatLayoutIds: string[]): Promise<boolean> {
        const count = await this.busTemplateModel
            .countDocuments({ _id: { $in: seatLayoutIds } })
            .exec();

        return count === seatLayoutIds.length;
    }
}
