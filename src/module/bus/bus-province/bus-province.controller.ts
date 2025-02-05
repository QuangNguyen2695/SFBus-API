import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { BusProvinceService } from './bus-province.service';
import { CreateBusProvinceDto } from './dto/create-bus-province.dto';
import { UpdateBusProvinceDto } from './dto/update-bus-province.dto';

@Controller('bus-province')
export class BusProvinceController {
  constructor(private readonly busProvinceService: BusProvinceService) { }

  @Post()
  create(@Body() createBusProvinceDto: CreateBusProvinceDto) {
    return this.busProvinceService.create(createBusProvinceDto);
  }

  @Get('findAll')
  findAll() {
    return this.busProvinceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.busProvinceService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateBusProvinceDto: UpdateBusProvinceDto) {
    return this.busProvinceService.update(id, updateBusProvinceDto);
  }
}
