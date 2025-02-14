import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { BookingService } from './booking-service';
import { CreateBookingDto } from './dto/create-bookingdto';
import { Roles } from '@/decorators/roles.decorator';
import { JwtAuthGuard } from '@/guards/jwt-auth.guard';
import { RolesGuard } from '@/guards/roles.guard';

@Controller('booking')
export class BookingController {
  constructor(private readonly bookingService: BookingService) { }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('user')
  @Post()
  create(@Body() createBookingDto: CreateBookingDto[]) {
    return this.bookingService.create(createBookingDto);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('user')
  @Get()
  findAll() {
    return this.bookingService.findAll();
  }
}
