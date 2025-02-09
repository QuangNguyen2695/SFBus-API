// user.controller.ts

import {
  Controller,
  Post,
  Body,
  BadRequestException,
  Put,
  UseGuards,
  Request,
  Get,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtAuthGuard } from '@/guards/jwt-auth.guard';
import { UserDocument } from './schema/user.schema';
import { UserDto } from './dto/user.dto';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) { }

  @Get('afternoon')
  goodAfternoon() {
    console.log("🚀 ~ UserController ~ goodAfternoon ~ goodAfternoon:")
    return 'Good Afternoon!';
  }
  // Endpoint đăng ký người dùng mới
  @Post('register')
  async register(@Body() createUserDto: CreateUserDto) {
    try {
      const user = await this.userService.create(createUserDto);
      return {
        message: 'Đăng ký thành công!',
        user: { username: user.username, _id: user._id },
      };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  // Endpoint cập nhật thông tin người dùng
  @UseGuards(JwtAuthGuard)
  @Put('profile')
  async updateProfile(@Request() req, @Body() updateUserDto: UpdateUserDto) {
    try {
      const userId = req.user.userId;
      const updatedUser = await this.userService.update(userId, updateUserDto);
      return {
        message: 'Cập nhật thông tin thành công!',
        user: {
          username: updatedUser.username,
          email: updatedUser.email,
          name: updatedUser.name,
          // Có thể thêm các trường khác tùy ý
        },
      };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  // Endpoint lấy thông tin người dùng hiện tại
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  async getProfile(@Request() req) {
    const userId = req.user._id;
    const user: UserDto = await this.userService.findById(userId);
    if (!user) {
      throw new BadRequestException('User not found.');
    }
    const userObject = user.toObject();
    const { password, ...result } = userObject;
    return result;
  }
}
