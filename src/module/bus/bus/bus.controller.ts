import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { BusService } from './bus.service';
import { CreateBusDto } from './dto/create-bus.dto';
import { BusDto } from './dto/bus.dto';
import { Roles } from '@/decorators/roles.decorator';
import { JwtAuthGuard } from '@/guards/jwt-auth.guard';
import { RolesGuard } from '@/guards/roles.guard';

@Controller('bus')
export class BusController {
  constructor(private readonly busService: BusService) { }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('user')
  @Post()
  async create(@Body() createBusDto: CreateBusDto) {
    await this.busService.create(createBusDto);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('user')
  @Get()
  async findAll(): Promise<BusDto[]> {
    return this.busService.findAll();
  }
}
