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
import { BusTemplateService } from './bus-template.service';
import { CreateBusTemplateDto } from './dto/create-bus-template.dto';
import { Roles } from '@/decorators/roles.decorator';
import { JwtAuthGuard } from '@/guards/jwt-auth.guard';
import { RolesGuard } from '@/guards/roles.guard';
import { UpdateBusTemplateDto } from './dto/update-bus-template.dto';

@Controller('bus-templates')
export class BusTemplateController {
    constructor(private readonly busTemplateService: BusTemplateService) { }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('user')
    @Post()
    async create(@Body() createBusTemplateDto: CreateBusTemplateDto) {
        return this.busTemplateService.create(createBusTemplateDto);
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('user')
    @Get()
    async findAll() {
        return this.busTemplateService.findAll();
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('user')
    @Get(':id')
    async findOne(@Param('id') id: string) {
        return this.busTemplateService.findOne(id);
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('user')
    @Put(':id')
    async update(
        @Param('id') id: string,
        @Body() updateBusTemplateDto: UpdateBusTemplateDto,
    ) {
        return this.busTemplateService.update(id, updateBusTemplateDto);
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('user')
    @Delete(':id')
    async remove(@Param('id') id: string) {
        await this.busTemplateService.remove(id);
        return { message: 'BusTemplate deleted successfully' };
    }
}
