import { LoginDto } from './../auth/dto/login.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { CreateAppUserDto } from './dto/create-app-user.dto';
import { UpdateAppUserDto } from './dto/update-app-user.dto';
import { AppUser } from './entities/app-user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AppUserService {
  constructor(
    @InjectRepository(AppUser)
    private userRepository: Repository<AppUser>,
  ) {}

  async register(createAppUserDto: CreateAppUserDto) {
    return this.userRepository.save(createAppUserDto);
  }

  create(createAppUserDto: CreateAppUserDto) {
    return 'This action adds a new appUser';
  }

  findAll() {
    return `This action returns all appUser`;
  }

  findOne(id: number) {
    return this.userRepository.findOne({ where: { id } });
  }

  findByEmail(email: string) {
    return this.userRepository.findOne({ where: { email } });
  }

  update(id: number, updateAppUserDto: UpdateAppUserDto) {
    return `This action updates a #${id} appUser`;
  }

  remove(id: number) {
    return `This action removes a #${id} appUser`;
  }
}
