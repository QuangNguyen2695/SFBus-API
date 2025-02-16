// bus-template.controller.ts

import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Put,
    Delete,
    UseGuards,
} from '@nestjs/common';
import { BusScheduleTemplateService } from './bus-schedule-template.service';
import { CreateBusScheduleTemplateDto } from './dto/create-bus-schedule-template.dto';
import { Roles } from '@/decorators/roles.decorator';
import { JwtAuthGuard } from '@/guards/jwt-auth.guard';
import { RolesGuard } from '@/guards/roles.guard';
import { UpdateBusScheduleTemplateDto } from './dto/update-bus-schedule-template.dto';

@Controller('bus-schedule-templates')
export class BusScheduleTemplateController {
    constructor(private readonly busScheduleTemplateService: BusScheduleTemplateService) { }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('user')
    @Post()
    async create(@Body() createBusScheduleTemplateDto: CreateBusScheduleTemplateDto) {
        return this.busScheduleTemplateService.create(createBusScheduleTemplateDto);
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('user')
    @Get()
    async findAll() {
        return this.busScheduleTemplateService.findAll();
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('user')
    @Get(':id')
    async findOne(@Param('id') id: string) {
        return this.busScheduleTemplateService.findOne(id);
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('user')
    @Put(':id')
    async update(
        @Param('id') id: string,
        @Body() updateBusTemplateDto: UpdateBusScheduleTemplateDto,
    ) {
        return this.busScheduleTemplateService.update(id, updateBusTemplateDto);
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('user')
    @Delete(':id')
    async remove(@Param('id') id: string) {
        await this.busScheduleTemplateService.remove(id);
        return { message: 'BusTemplate deleted successfully' };
    }
}
