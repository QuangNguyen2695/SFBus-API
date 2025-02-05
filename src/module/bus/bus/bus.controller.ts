import { Controller, Get, Post, Body } from '@nestjs/common';
import { BusService } from './bus.service';
import { CreateBusDto } from './dto/create-bus.dto';
import { Bus } from './interface.ts/bus.interface';

@Controller('bus')
export class BusController {
  constructor(private readonly busService: BusService) { }

  @Post()
  async create(@Body() createBusDto: CreateBusDto) {
    await this.busService.create(createBusDto);
  }

  @Get()
  async findAll(): Promise<Bus[]> {
    return this.busService.findAll();
  }
}
