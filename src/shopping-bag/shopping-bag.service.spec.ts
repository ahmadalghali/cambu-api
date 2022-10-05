import { Test, TestingModule } from '@nestjs/testing';
import { ShoppingBagService } from './shopping-bag.service';

describe('ShoppingBagService', () => {
  let service: ShoppingBagService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShoppingBagService],
    }).compile();

    service = module.get<ShoppingBagService>(ShoppingBagService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
