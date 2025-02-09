// bus-template.service.ts

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBusTemplateDto } from './dto/create-bus-templatedto';
import { UpdateBusTemplateDto } from './dto/update-bus-templatedto';
import { BusTemplateDocument } from './schema/bus-template.schema';
import { BusTemplateDto } from './dto/bus-template.dto';

@Injectable()
export class BusTemplateService {
    constructor(
        @InjectModel(BusTemplateDocument.name) private busTemplateModel: Model<BusTemplateDto>,
    ) { }

    async create(createBusTemplateDto: CreateBusTemplateDto): Promise<BusTemplateDto> {
        // Validate that all SeatLayout IDs exist
        const seatLayoutsExist = await this.validateSeatLayouts(
            createBusTemplateDto.seatLayouts,
        );

        if (!seatLayoutsExist) {
            throw new NotFoundException('One or more SeatLayouts do not exist.');
        }

        const createdTemplate = new this.busTemplateModel(createBusTemplateDto);
        return createdTemplate.save();
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
        // Validate SeatLayouts if they're being updated
        if (updateBusTemplateDto.seatLayouts) {
            const seatLayoutsExist = await this.validateSeatLayouts(
                updateBusTemplateDto.seatLayouts,
            );

            if (!seatLayoutsExist) {
                throw new NotFoundException('One or more SeatLayouts do not exist.');
            }
        }

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
