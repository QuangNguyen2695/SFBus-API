import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { BusServiceService } from './bus-service.service';
import { CreateBusServiceDto } from './dto/create-bus-service.dto';
import { UpdateBusServiceDto } from './dto/update-bus-service.dto';

@Controller('bus-Service')
export class BusServiceController {
  constructor(private readonly busServiceService: BusServiceService) { }

  @Post()
  create(@Body() createBusServiceDto: CreateBusServiceDto) {
    return this.busServiceService.create(createBusServiceDto);
  }

  @Get('findAll')
  findAll() {
    return this.busServiceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.busServiceService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateBusServiceDto: UpdateBusServiceDto) {
    return this.busServiceService.update(id, updateBusServiceDto);

  }

}
