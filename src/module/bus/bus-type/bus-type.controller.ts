import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query, ValidationPipe, Put } from '@nestjs/common';
import { BusTypeService } from './bus-type.service';
import { CreateBusTypeDto } from './dto/create-bus-type.dto';
import { Roles } from '@/decorators/roles.decorator';
import { JwtAuthGuard } from '@/guards/jwt-auth.guard';
import { RolesGuard } from '@/guards/roles.guard';
import { SearchBusTypesQuery } from './dto/bus-type.dto';
import { UpdateBusTypeDto } from './dto/update-bus-type.dto';
import { ParseObjectIdPipe } from '@/pipe/parse-objectId.pipe';
import { Types } from 'mongoose';

@Controller('bus-types')
export class BusTypeController {
  constructor(private readonly busTypeService: BusTypeService) { }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @Post()
  create(@Body() createBusTypeDto: CreateBusTypeDto) {
    return this.busTypeService.create(createBusTypeDto);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @Put()
  update(@Body() updateBusTypeDto: UpdateBusTypeDto) {
    return this.busTypeService.update(updateBusTypeDto);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('user')
  @Get()
  findAll() {
    return this.busTypeService.findAll();
  }

  @Delete(':id')
  delete(@Param('id', ParseObjectIdPipe) id: Types.ObjectId) {
    return this.busTypeService.delete(id);
  }

  @Get('/search')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('user', 'admin')
  search(
    @Query(new ValidationPipe({
      transform: true,
      transformOptions: { enableImplicitConversion: true },
      forbidNonWhitelisted: true
    })) query: SearchBusTypesQuery
  ) {
    const { pageIdx = 0, pageSize = 0, keyword = "", sortBy = "" } = query;
    return this.busTypeService.search(+pageIdx, +pageSize, keyword, sortBy);
  }
}
