import {
  Injectable,
  UnauthorizedException,
  BadRequestException,
  Inject,
} from '@nestjs/common';
// import { UserService } from 'src/user/user.service';
// import { User } from 'src/user/entities/user.entity';
// import { UserService } from 'src/user/user.service';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';
import { LoginResponseDto } from './dto/login-response.dto';
import { AppUserService } from 'src/app-user/app-user.service';
import { CreateAppUserDto } from 'src/app-user/dto/create-app-user.dto';

@Injectable()
export class AuthService {
  constructor(private userService: AppUserService) {}

  async login(email: string, password: string) {
    const user = await this.userService.findByEmail(email);

    if (user) {
      const hashedPassword = user.password;
      const passwordMatches = await bcrypt.compare(password, hashedPassword);

      if (passwordMatches) {
        const { password, ...rest } = user;
        return rest;
      } else {
        throw new UnauthorizedException('Invalid Credentials');
      }
    } else {
      throw new UnauthorizedException(`User with email ${email} not found`);
    }
  }

  async logout(userId: number) {
    // await this.userService.update(userId, {
    //   hashedRefreshToken: null,
    // });
    return { message: 'Logged out.' };
  }
  async register(createAppUserDto: CreateAppUserDto) {
    const { email, password } = createAppUserDto;
    await this.checkUserExists(email);

    const hashedPassword = await this.hashPassword(password);
    createAppUserDto.password = hashedPassword;

    return this.userService.register(createAppUserDto);
  }

  async hashPassword(password: string): Promise<string> {
    return await bcrypt.hash(password, 10);
  }

  async checkUserExists(email: string) {
    const userExists = await this.userService.findByEmail(email);
    if (userExists) throw new BadRequestException('Email already registered');
  }

  hashData(data: any) {
    return bcrypt.hash(data, 10);
  }
}
