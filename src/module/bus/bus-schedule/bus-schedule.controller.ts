// src/bus-schedule/bus-schedule.controller.ts
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query, ValidationPipe } from '@nestjs/common';
import { BusScheduleService } from './bus-schedule.service';
import { CreateBusScheduleDto } from './dto/create-bus-schedule.dto';
import { UpdateBusScheduleDto } from './dto/update-bus-schedule.dto';
import { Types } from 'mongoose';
import { Roles } from '@/decorators/roles.decorator';
import { JwtAuthGuard } from '@/guards/jwt-auth.guard';
import { RolesGuard } from '@/guards/roles.guard';
import { BusScheduleDto, SearchBusScheduleQuery } from './dto/bus-schedule.dto';
import { BusService } from '../bus/bus.service';

@Controller('bus-schedule')
export class BusScheduleController {
  constructor(
    private readonly busScheduleService: BusScheduleService,
    private readonly busService: BusService
  ) { }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('user')
  @Post()
  create(@Body() createBusScheduleDto: CreateBusScheduleDto) {
    return this.busScheduleService.create(createBusScheduleDto);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('user')
  @Get()
  findAll() {
    return this.busScheduleService.findAll();
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('user')
  @Get(':id')
  findOne(@Param('id') id: Types.ObjectId) {
    return this.busScheduleService.findOne(id);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('user')
  @Patch(':id')
  update(
    @Param('id') id: Types.ObjectId,
    @Body() updateBusScheduleDto: UpdateBusScheduleDto,
  ) {
    return this.busScheduleService.update(id, updateBusScheduleDto);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('user')
  @Delete(':id')
  remove(@Param('id') id: Types.ObjectId) {
    return this.busScheduleService.remove(id);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('user')
  @Get('search')
  async searchBusSchedule(
    @Query(new ValidationPipe({
      transform: true,
      transformOptions: { enableImplicitConversion: true },
      forbidNonWhitelisted: true
    })) query: SearchBusScheduleQuery
  ) {
    return this.busScheduleService.searchBusSchedule(query);
  }
}
