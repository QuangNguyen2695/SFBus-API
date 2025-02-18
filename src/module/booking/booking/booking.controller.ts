import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { BookingService } from './booking-service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { Roles } from '@/decorators/roles.decorator';
import { JwtAuthGuard } from '@/guards/jwt-auth.guard';
import { RolesGuard } from '@/guards/roles.guard';
import { ParseObjectIdPipe } from '@/pipe/parse-objectId.pipe';
import { Types } from 'mongoose';

@Controller('booking')
export class BookingController {
  constructor(private readonly bookingService: BookingService) { }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('user')
  @Post()
  create(@Body(ParseObjectIdPipe) createBookingDto: CreateBookingDto) {
    return this.bookingService.create(createBookingDto);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('user')
  @Post('cancel/:bookingId')
  cancelBooking(@Request() req, @Param('bookingId', ParseObjectIdPipe) bookingId: Types.ObjectId) {
    const userId = req.user._id;
    return this.bookingService.cancelBooking(userId, bookingId);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('user')
  @Get()
  findAll() {
    return this.bookingService.findAll();
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('user')
  @Get('find-all-by-user')
  findAllByUser(@Request() req) {
    const userId = req.user._id;
    return this.bookingService.findAllByUser(userId);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('user')
  @Get('find-one-by-id-and-user/:bookingId')
  findOneByIdAndUser(@Request() req, @Param('bookingId', ParseObjectIdPipe) bookingId: Types.ObjectId) {
    const userId = req.user._id;
    return this.bookingService.findOneByIdAndUser(userId, bookingId);
  }
}
