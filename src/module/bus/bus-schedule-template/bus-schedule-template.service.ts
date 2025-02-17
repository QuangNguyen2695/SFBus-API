// bus-template.service.ts

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { BusScheduleTemplateDocument } from './schema/bus-schedule-template.schema';
import { CreateBusScheduleTemplateDto } from './dto/create-bus-schedule-template.dto';
import { BusScheduleTemplateDto } from './dto/bus-schedule-template.dto';
import { UpdateBusScheduleTemplateDto } from './dto/update-bus-schedule-template.dto';
import { plainToInstance } from 'class-transformer';
import { BookingSeatDto } from '@/module/booking/booking/dto/create-booking.dto';

@Injectable()
export class BusScheduleTemplateService {
    constructor(
        @InjectModel(BusScheduleTemplateDocument.name) private busScheduleTemplateModel: Model<BusScheduleTemplateDocument>,
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

        const savedTemplate = await createdBusTemplate.save();
        return plainToInstance(BusScheduleTemplateDto, savedTemplate.toObject());
    }

    async findAll(): Promise<BusScheduleTemplateDto[]> {
        const templates = await this.busScheduleTemplateModel.find().populate('seatLayouts').exec();
        return templates.map(template => plainToInstance(BusScheduleTemplateDto, template.toObject()));
    }

    async findOne(id: string): Promise<BusScheduleTemplateDto> {
        const template = await this.busScheduleTemplateModel
            .findById(id)
            .populate('seatLayouts')
            .exec();

        if (!template) {
            throw new NotFoundException(`BusScheduleTemplate with ID "${id}" not found.`);
        }

        return plainToInstance(BusScheduleTemplateDto, template.toObject());
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

        return plainToInstance(BusScheduleTemplateDto, updatedTemplate.toObject());
    }

    async updateSeatStatus(
        busScheduleTemplateId: Types.ObjectId,
        seats: BookingSeatDto[],
        status: string,
    ): Promise<boolean> {
        const updatedTemplate = await this.busScheduleTemplateModel
            .findById(busScheduleTemplateId)
            .exec();

        if (!updatedTemplate) {
            throw new NotFoundException(`BusScheduleTemplate with ID "${busScheduleTemplateId}" not found.`);
        }

        const seatUpdatePromises: Promise<any>[] = [];

        updatedTemplate.seatLayouts.forEach((layout, layoutIndex) => {
            layout.seats.forEach((seat: any, seatIndex) => {
                const isSeatIncluded = seats.some(seat => seat._id.toString() === seat._id.toString());
                if (isSeatIncluded) {
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
