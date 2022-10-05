import { SessionSerializer } from './session.serializer';
import { LocalStrategy } from './strategy/local.strategy';
// import { UserModule } from 'src/user/user.module';

import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { ConfigModule } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { AppUserModule } from 'src/app-user/app-user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppUserService } from 'src/app-user/app-user.service';

@Module({
  imports: [
    AppUserModule,
    PassportModule.register({ session: true }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, SessionSerializer],
  exports: [AuthService],
})
export class AuthModule {}
