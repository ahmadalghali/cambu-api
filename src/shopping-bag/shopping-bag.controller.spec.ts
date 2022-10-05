import { Test, TestingModule } from '@nestjs/testing';
import { ShoppingBagController } from './shopping-bag.controller';
import { ShoppingBagService } from './shopping-bag.service';

describe('ShoppingBagController', () => {
  let controller: ShoppingBagController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShoppingBagController],
      providers: [ShoppingBagService],
    }).compile();

    controller = module.get<ShoppingBagController>(ShoppingBagController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
