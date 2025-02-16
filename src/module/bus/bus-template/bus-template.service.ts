// bus-template.service.ts

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { BusTemplateDocument } from './schema/bus-template.schema';
import { BusTemplateDto } from './dto/bus-template.dto';
import { CreateBusTemplateDto } from './dto/create-bus-template.dto';
import { UpdateBusTemplateDto } from './dto/update-bus-template.dto';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class BusTemplateService {
    constructor(
        @InjectModel(BusTemplateDocument.name) private busTemplateModel: Model<BusTemplateDocument>,
    ) { }

    async create(createBusTemplateDto: CreateBusTemplateDto): Promise<BusTemplateDto> {
        const createdBusTemplate = new this.busTemplateModel({
            ...createBusTemplateDto,
        });
        const savedBusTemplate = await createdBusTemplate.save();
        return plainToInstance(BusTemplateDto, savedBusTemplate.toObject());
    }

    async findAll(): Promise<BusTemplateDto[]> {
        const templates = await this.busTemplateModel.find().populate('seatLayouts').exec();
        return templates.map(template => plainToInstance(BusTemplateDto, template.toObject()));
    }

    async findOne(id: string): Promise<BusTemplateDto> {
        const template = await this.busTemplateModel
            .findById(id)
            .populate('seatLayouts')
            .exec();

        if (!template) {
            throw new NotFoundException(`BusTemplate with ID "${id}" not found.`);
        }

        return plainToInstance(BusTemplateDto, template.toObject());
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

        return plainToInstance(BusTemplateDto, updatedTemplate.toObject());
    }

    async remove(id: string): Promise<void> {
        const result = await this.busTemplateModel.findByIdAndDelete(id).exec();
        if (!result) {
            throw new NotFoundException(`BusTemplate with ID "${id}" not found.`);
        }
    }
}
