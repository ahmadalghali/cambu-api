import { Shoe } from './entities/shoe.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateShoeDto } from './dto/create-shoe.dto';
import { UpdateShoeDto } from './dto/update-shoe.dto';

@Injectable()
export class ShoesService {
  constructor(
    @InjectRepository(Shoe)
    private shoeRepository: Repository<Shoe>,
  ) {}
  create(createShoeDto: CreateShoeDto) {
    return 'This action adds a new shoe';
  }

  findAll() {
    return this.shoeRepository.find();
  }

  findOne(id: number) {
    return this.shoeRepository.findOne({
      where: {
        id,
      },
    });
  }

  update(id: number, updateShoeDto: UpdateShoeDto) {
    return `This action updates a #${id} shoe`;
  }

  remove(id: number) {
    return `This action removes a #${id} shoe`;
  }
}
