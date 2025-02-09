import { Controller, Get, Post, Body, Patch, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { BusServiceService } from './bus-service.service';
import { CreateBusServiceDto } from './dto/create-bus-service.dto';
import { UpdateBusServiceDto } from './dto/update-bus-service.dto';
import { Roles } from '@/decorators/roles.decorator';
import { JwtAuthGuard } from '@/guards/jwt-auth.guard';
import { RolesGuard } from '@/guards/roles.guard';

@Controller('bus-Service')
export class BusServiceController {
  constructor(private readonly busServiceService: BusServiceService) { }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('user')
  @Post()
  create(@Body() createBusServiceDto: CreateBusServiceDto) {
    return this.busServiceService.create(createBusServiceDto);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('user')
  @Get('findAll')
  findAll() {
    return this.busServiceService.findAll();
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('user')
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.busServiceService.findOne(id);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('user')
  @Put(':id')
  update(@Param('id') id: string, @Body() updateBusServiceDto: UpdateBusServiceDto) {
    return this.busServiceService.update(id, updateBusServiceDto);

  }

}
