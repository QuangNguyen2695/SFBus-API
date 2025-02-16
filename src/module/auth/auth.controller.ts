import { Controller, Request, Post, UseGuards, Get, Req, Param, Query } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from '@/guards/local-auth.guard.ts';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    // Endpoint đăng nhập
    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Request() req) {
        // Sau khi LocalStrategy xác thực, req.user sẽ chứa thông tin người dùng
        return this.authService.login(req.user);
    }

    @Get('verify-phoneNumber')
    async verifyPhoneNumber(@Query('phoneNumber') phoneNumber: string) {
        const name = await this.authService.verifyPhoneNumber(phoneNumber);
        return JSON.stringify(name);
    }
}
