import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { UserService } from '@/module/user/user/user.service';
import { ConfigService } from '@nestjs/config';
import { UserDto } from '@/module/user/user/dto/user.dto';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private userService: UserService, configService: ConfigService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: configService.get<string>('JWT_SECRET')
        });
    }

    async validate(payload: any): Promise<UserDto> {
        const user = await this.userService.findById(payload.sub);
        if (!user) {
            throw new UnauthorizedException('Unauthorized');
        }
        return user;
    }
}