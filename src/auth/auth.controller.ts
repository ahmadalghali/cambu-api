import { CreateAppUserDto } from './../app-user/dto/create-app-user.dto';
import { AuthenticatedGuard } from './guard/authenticated.guard';
import { GetUserId } from './decorators/get-user-id.decorator';
import { GetUser } from './decorators/get-user.decorator';
import { AccessTokenGuard } from './guard/access-token.guard';
import { RefreshTokenGuard } from './guard/refresh-token.guard';
import { AuthGuard } from '@nestjs/passport';
import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  NotFoundException,
  Param,
  Post,
  Req,
  UnauthorizedException,
  UseGuards,
  Get,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { Public } from './decorators/public.decorator';
import { Request } from 'express';
import { LocalAuthGuard } from './guard/local-auth.guard';
import { LoginDto } from './dto/login.dto';
import { LoginResponseDto } from './dto/login-response.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('register')
  async register(@Body() createAppUserDto: CreateAppUserDto) {
    return this.authService.register(createAppUserDto);
  }

  // @Public()
  // @HttpCode(HttpStatus.OK)
  // @Post('login')
  // async login(@Body() loginDto: LoginDto): Promise<LoginResponse> {
  //   return this.authService.login(loginDto);
  // }

  @Public()
  @UseGuards(LocalAuthGuard)
  @HttpCode(HttpStatus.OK)
  @Post('login')
  login(@Req() req: Request, @Body() loginDto: LoginDto): LoginResponseDto {
    // @ts-ignore
    return req.user;
  }

  @Get('protected')
  async protected(@Req() req: Request) {
    return req.user;
  }

  @HttpCode(HttpStatus.OK)
  @Post('logout')
  async logout(@Req() req) {
    return req.logout();
    // return this.authService.logout(userId);
  }
}
