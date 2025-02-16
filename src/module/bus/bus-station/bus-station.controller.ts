import { Controller, Get, Post, Body, Patch, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { BusStationService } from './bus-station.service';
import { CreateBusStationDto } from './dto/create-bus-station.dto';
import { UpdateBusStationDto } from './dto/update-bus-station.dto';
import { JwtAuthGuard } from '@/guards/jwt-auth.guard';
import { RolesGuard } from '@/guards/roles.guard';
import { Roles } from '@/decorators/roles.decorator';

@Controller('bus-station')
export class BusStationController {
  constructor(private readonly busStationService: BusStationService) { }

  @Post()
  create(@Body() createBusStationDto: CreateBusStationDto) {
    return this.busStationService.create(createBusStationDto);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('user')
  @Get('findAll')
  findAll() {
    return this.busStationService.findAll();
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('user')
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.busStationService.findOne(id);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('user')
  @Put(':id')
  update(@Param('id') id: string, @Body() updateBusStationDto: UpdateBusStationDto) {
    return this.busStationService.update(id, updateBusStationDto);

  }

}
