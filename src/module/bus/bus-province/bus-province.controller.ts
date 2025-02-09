import { Controller, Get, Post, Body, Patch, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { BusProvinceService } from './bus-province.service';
import { CreateBusProvinceDto } from './dto/create-bus-province.dto';
import { UpdateBusProvinceDto } from './dto/update-bus-province.dto';
import { Roles } from '@/decorators/roles.decorator';
import { JwtAuthGuard } from '@/guards/jwt-auth.guard';
import { RolesGuard } from '@/guards/roles.guard';

@Controller('bus-province')
export class BusProvinceController {
  constructor(private readonly busProvinceService: BusProvinceService) { }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('user')
  @Post()
  create(@Body() createBusProvinceDto: CreateBusProvinceDto) {
    return this.busProvinceService.create(createBusProvinceDto);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('user')
  @Get('findAll')
  findAll() {
    return this.busProvinceService.findAll();
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('user')
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.busProvinceService.findOne(id);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('user')
  @Put(':id')
  update(@Param('id') id: string, @Body() updateBusProvinceDto: UpdateBusProvinceDto) {
    return this.busProvinceService.update(id, updateBusProvinceDto);
  }
}
