// local.strategy.ts

import { Strategy } from 'passport-local';
import {
    Injectable,
    UnauthorizedException,
} from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { AuthService } from '@/module/auth/auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
        // By default, passport-local expects 'username' and 'password' fields
        super({
            usernameField: 'phoneNumber' // Định nghĩa trường `username` thành `phoneNumber`
        });
    }

    async validate(phoneNumber: string, password: string): Promise<any> {
        // Validate the user credentials
        const user = await this.authService.validateUser(phoneNumber, password);
        if (!user) {
            throw new UnauthorizedException('Tên đăng nhập hoặc mật khẩu không đúng.');
        }
        return user; // The validated user will be attached to req.user
    }
}
