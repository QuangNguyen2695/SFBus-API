import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { BusStationService } from './bus-station.service';
import { CreateBusStationDto } from './dto/create-bus-station.dto';
import { UpdateBusStationDto } from './dto/update-bus-station.dto';

@Controller('bus-Station')
export class BusStationController {
  constructor(private readonly busStationService: BusStationService) { }

  @Post()
  create(@Body() createBusStationDto: CreateBusStationDto) {
    return this.busStationService.create(createBusStationDto);
  }

  @Get('findAll')
  findAll() {
    return this.busStationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.busStationService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateBusStationDto: UpdateBusStationDto) {
    return this.busStationService.update(id, updateBusStationDto);

  }

}
