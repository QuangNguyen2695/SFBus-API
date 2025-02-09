// user.service.ts

import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserDocument } from './schema/user.schema';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel(UserDocument.name) private userModel: Model<UserDto>) { }

  // Tạo mới người dùng
  async create(createUserDto: CreateUserDto): Promise<UserDto> {
    const { username, password, email, phoneNumber } = createUserDto;

    // Kiểm tra tính duy nhất của username, email và phoneNumber
    const userExists = await this.userModel.findOne({
      $or: [{ username }, { email }, { phoneNumber }],
    });

    if (userExists) {
      if (userExists.username === username) {
        throw new BadRequestException('Tên đăng nhập đã được sử dụng.');
      }
      if (userExists.email === email) {
        throw new BadRequestException('Email đã được sử dụng.');
      }
      if (userExists.phoneNumber === phoneNumber) {
        throw new BadRequestException('Số điện thoại đã được sử dụng.');
      }
    }

    // Băm mật khẩu
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new this.userModel({
      ...createUserDto,
      password: hashedPassword,
    });

    return newUser.save();
  }

  // Cập nhật thông tin người dùng
  async update(userId: string, updateUserDto: UpdateUserDto): Promise<UserDto> {
    const user = await this.userModel.findById(userId);
    if (!user) {
      throw new NotFoundException('Người dùng không tồn tại.');
    }

    // Nếu cập nhật username, email hoặc phoneNumber, cần kiểm tra tính duy nhất
    const { username, email, phoneNumber } = updateUserDto;

    if (username && username !== user.username) {
      const usernameExists = await this.userModel.findOne({ username });
      if (usernameExists) {
        throw new BadRequestException('Tên đăng nhập đã được sử dụng.');
      }
    }

    if (email && email !== user.email) {
      const emailExists = await this.userModel.findOne({ email });
      if (emailExists) {
        throw new BadRequestException('Email đã được sử dụng.');
      }
    }

    if (phoneNumber && phoneNumber !== user.phoneNumber) {
      const phoneExists = await this.userModel.findOne({ phoneNumber });
      if (phoneExists) {
        throw new BadRequestException('Số điện thoại đã được sử dụng.');
      }
    }

    // Nếu cập nhật mật khẩu, cần băm mật khẩu mới
    if (updateUserDto.password) {
      updateUserDto.password = await bcrypt.hash(updateUserDto.password, 10);
    }

    Object.assign(user, updateUserDto);
    return user.save();
  }

  // Tìm người dùng theo ID
  async findById(userId: Types.ObjectId): Promise<UserDto> {
    return this.userModel.findById(userId).exec();
  }

  // Tìm người dùng theo tên đăng nhập
  async findByUsername(username: string): Promise<UserDto> {
    return this.userModel.findOne({ username }).exec();
  }

  // Xác thực người dùng
  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.findByUsername(username);
    if (user && (await bcrypt.compare(password, user.password))) {
      const userObject = user.toObject();
      const { password, ...result } = userObject;
      return result;
    }
    return null;
  }
}
