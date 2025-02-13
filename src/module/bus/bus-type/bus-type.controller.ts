import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { BusTypeService } from './bus-type.service';
import { CreateBusTypeDto } from './dto/create-bus-type.dto';

@Controller('bus-types')
export class BusTypeController {
  constructor(private readonly busTypeService: BusTypeService) { }

  @Post()
  create(@Body() createBusTypeDto: CreateBusTypeDto) {
    return this.busTypeService.create(createBusTypeDto);
  }

  @Get()
  findAll() {
    return this.busTypeService.findAll();
  }
}
