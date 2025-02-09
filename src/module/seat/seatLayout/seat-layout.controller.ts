// seat-layout.controller.ts

import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Put,
    Delete,
} from '@nestjs/common';
import { SeatLayoutService } from './seat-layout.service';
import { CreateSeatLayoutDto } from './dto/create-seat-layout.dto';
import { UpdateSeatLayoutDto } from './dto/update-seat-layout.dto';

@Controller('seat-layouts')
export class SeatLayoutController {
    constructor(private readonly seatLayoutService: SeatLayoutService) { }

    @Post()
    async create(@Body() createSeatLayoutDto: CreateSeatLayoutDto) {
        return this.seatLayoutService.create(createSeatLayoutDto);
    }

    @Get()
    async findAll() {
        return this.seatLayoutService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        return this.seatLayoutService.findOne(id);
    }

    @Put(':id')
    async update(
        @Param('id') id: string,
        @Body() updateSeatLayoutDto: UpdateSeatLayoutDto,
    ) {
        return this.seatLayoutService.update(id, updateSeatLayoutDto);
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        return this.seatLayoutService.remove(id);
    }
}
