import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ShoppingBagService } from './shopping-bag.service';
import { CreateShoppingBagDto } from './dto/create-shopping-bag.dto';
import { UpdateShoppingBagDto } from './dto/update-shopping-bag.dto';

@Controller('shopping-bag')
export class ShoppingBagController {
  constructor(private readonly shoppingBagService: ShoppingBagService) {}

  @Post()
  create(@Body() createShoppingBagDto: CreateShoppingBagDto) {
    return this.shoppingBagService.create(createShoppingBagDto);
  }

  @Get()
  findAll() {
    return this.shoppingBagService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.shoppingBagService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateShoppingBagDto: UpdateShoppingBagDto) {
    return this.shoppingBagService.update(+id, updateShoppingBagDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.shoppingBagService.remove(+id);
  }
}
