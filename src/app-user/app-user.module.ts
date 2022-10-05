import { Module } from '@nestjs/common';
import { AppUserService } from './app-user.service';
import { AppUserController } from './app-user.controller';

@Module({
  controllers: [AppUserController],
  providers: [AppUserService]
})
export class AppUserModule {}
