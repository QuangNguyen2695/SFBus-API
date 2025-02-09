import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { SeatService } from './seat.service';
import { CreateSeatDto } from './dto/create-seat.dto';
import { UpdateSeatDto } from './dto/update-seat.dto';
import { Roles } from '@/decorators/roles.decorator';
import { JwtAuthGuard } from '@/guards/jwt-auth.guard';
import { RolesGuard } from '@/guards/roles.guard';

@Controller('seats')
export class SeatController {
  constructor(private readonly seatService: SeatService) { }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('user')
  @Post()
  async create(@Body() createSeatDto: CreateSeatDto) {
    return this.seatService.create(createSeatDto);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('user')
  @Get()
  async findAll() {
    return this.seatService.findAll();
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('user')
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.seatService.findOne(id);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('user')
  @Put(':id')
  async update(@Param('id') id: string, @Body() updateSeatDto: UpdateSeatDto) {
    return this.seatService.update(id, updateSeatDto);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('user')
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.seatService.remove(id);
  }
}
