// auth.service.ts

import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { UserDto } from '../user/user/dto/user.dto';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService,
    ) { }

    // Xác thực người dùng khi đăng nhập
    async validateUser(phoneNumber: string, password: string): Promise<any> {
        const user = await this.userService.validateUser(phoneNumber, password);
        if (user) {
            return user;
        }
        return null;
    }

    // Đăng nhập và trả về JWT token
    async login(user: UserDto) {
        const payload = { sub: user._id.toString(), role: user.role };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }

    // Xác thực người dùng khi đăng nhập
    async verifyPhoneNumber(phoneNumber: string): Promise<any> {
        const user = await this.userService.findByPhoneNumber(phoneNumber);
        if (user) {
            return true;
        }
        return false;
    }
}
