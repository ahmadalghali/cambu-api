import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';
import { AppUserService } from 'src/app-user/app-user.service';

@Injectable()
export class SessionSerializer extends PassportSerializer {
  constructor(private userService: AppUserService) {
    super();
  }
  serializeUser(user: any, done: Function) {
    done(null, user);
  }
  async deserializeUser(payload: any, done: Function) {
    const user = await this.userService.findOne(payload.id);
    if (!user) return new UnauthorizedException('Invalid credentials');
    const { password, ...rest } = user;
    done(null, rest);
  }
}
