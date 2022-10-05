import { Module } from '@nestjs/common';
import { ShoppingBagService } from './shopping-bag.service';
import { ShoppingBagController } from './shopping-bag.controller';

@Module({
  controllers: [ShoppingBagController],
  providers: [ShoppingBagService]
})
export class ShoppingBagModule {}
