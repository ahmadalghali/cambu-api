import { Injectable } from '@nestjs/common';
import { CreateShoppingBagDto } from './dto/create-shopping-bag.dto';
import { UpdateShoppingBagDto } from './dto/update-shopping-bag.dto';

@Injectable()
export class ShoppingBagService {
  create(createShoppingBagDto: CreateShoppingBagDto) {
    return 'This action adds a new shoppingBag';
  }

  findAll() {
    return `This action returns all shoppingBag`;
  }

  findOne(id: number) {
    return `This action returns a #${id} shoppingBag`;
  }

  update(id: number, updateShoppingBagDto: UpdateShoppingBagDto) {
    return `This action updates a #${id} shoppingBag`;
  }

  remove(id: number) {
    return `This action removes a #${id} shoppingBag`;
  }
}
