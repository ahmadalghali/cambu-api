import { OmitType } from '@nestjs/mapped-types';
import { AppUser } from '../entities/app-user.entity';

export class CreateAppUserDto extends OmitType(AppUser, ['id'] as const) {}
