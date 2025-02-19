// bus-template.service.ts

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { BusScheduleTemplateDocument } from './schema/bus-schedule-template.schema';
import { CreateBusScheduleTemplateDto } from './dto/create-bus-schedule-template.dto';
import { BusScheduleTemplateDto } from './dto/bus-schedule-template.dto';
import { UpdateBusScheduleTemplateDto } from './dto/update-bus-schedule-template.dto';

@Injectable()
export class BusScheduleTemplateService {
    constructor(
        @InjectModel(BusScheduleTemplateDocument.name) private busScheduleTemplateModel: Model<BusScheduleTemplateDto>,
    ) { }

    async create(createBusScheduleTemplateDto: CreateBusScheduleTemplateDto): Promise<BusScheduleTemplateDto> {
        const seatLayouts = createBusScheduleTemplateDto.seatLayouts.map(layout => {
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

        const createdBusTemplate = new this.busScheduleTemplateModel({
            ...createBusScheduleTemplateDto,
            seatLayouts
        });

        return createdBusTemplate.save();
    }

    async findAll(): Promise<BusScheduleTemplateDto[]> {
        return this.busScheduleTemplateModel.find().populate('seatLayouts').exec();
    }

    async findOne(id: string): Promise<BusScheduleTemplateDto> {
        const template = await this.busScheduleTemplateModel
            .findById(id)
            .populate('seatLayouts')
            .exec();

        if (!template) {
            throw new NotFoundException(`BusScheduleTemplate with ID "${id}" not found.`);
        }

        return template;
    }

    async update(
        id: string,
        updateBusScheduleTemplateDto: UpdateBusScheduleTemplateDto,
    ): Promise<BusScheduleTemplateDto> {
        const updatedTemplate = await this.busScheduleTemplateModel
            .findByIdAndUpdate(id, updateBusScheduleTemplateDto, { new: true })
            .populate('seatLayouts')
            .exec();

        if (!updatedTemplate) {
            throw new NotFoundException(`BusScheduleTemplate with ID "${id}" not found.`);
        }

        return updatedTemplate;
    }


    async updateSeatStatus(
        busScheduleTemplateId: Types.ObjectId,
        seatIds: string[],
        status: string,
    ): Promise<boolean> {
        const updatedTemplate = await this.busScheduleTemplateModel
            .findById(busScheduleTemplateId)
            .exec();

        if (!updatedTemplate) {
            throw new NotFoundException(`BusScheduleTemplate with ID "${busScheduleTemplateId}" not found.`);
        }

        const seatUpdatePromises = [];

        updatedTemplate.seatLayouts.forEach((layout, layoutIndex) => {
            layout.seats.forEach((seat, seatIndex) => {
                if (seatIds.includes(seat._id.toString())) {
                    seat.status = status;
                    seatUpdatePromises.push(this.busScheduleTemplateModel.updateOne(
                        { '_id': busScheduleTemplateId, [`seatLayouts.${layoutIndex}.seats._id`]: seat._id },
                        { $set: { [`seatLayouts.${layoutIndex}.seats.${seatIndex}.status`]: status } }
                    ).exec());
                }
            });
        });


        await Promise.all(seatUpdatePromises);
        return true;
    }

    async remove(id: string): Promise<void> {
        const result = await this.busScheduleTemplateModel.findByIdAndDelete(id).exec();
        if (!result) {
            throw new NotFoundException(`BusScheduleTemplate with ID "${id}" not found.`);
        }
    }
}
