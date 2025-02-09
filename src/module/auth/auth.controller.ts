import { Controller, Request, Post, UseGuards, Get } from '@nestjs/common';
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
}
