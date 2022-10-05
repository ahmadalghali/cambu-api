import { PartialType } from '@nestjs/mapped-types';
import { CreateShoppingBagDto } from './create-shopping-bag.dto';

export class UpdateShoppingBagDto extends PartialType(CreateShoppingBagDto) {}
