import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { BookingService } from './booking-service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { Roles } from '@/decorators/roles.decorator';
import { JwtAuthGuard } from '@/guards/jwt-auth.guard';
import { RolesGuard } from '@/guards/roles.guard';
import { ParseObjectIdPipe } from '@/pipe/parse-objectId.pipe';

@Controller('booking')
export class BookingController {
  constructor(private readonly bookingService: BookingService) { }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('user')
  @Post()
  create(@Body(ParseObjectIdPipe) createBookingDto: CreateBookingDto[]) {
    return this.bookingService.create(createBookingDto);
  }


  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('user')
  @Post('cancel')
  cancelBooking(@Body() BookingsDto: string[]) {
    return this.bookingService.cancelBooking(BookingsDto);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('user')
  @Get()
  findAll() {
    return this.bookingService.findAll();
  }


  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('user')
  @Get('find-by-user')
  findByUser(@Request() req) {
    const userId = req.user._id;
    return this.bookingService.findByUserId(userId);
  }
}
