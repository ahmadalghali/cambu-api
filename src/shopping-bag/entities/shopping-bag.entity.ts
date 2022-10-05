import { Shoe } from 'src/shoes/entities/shoe.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class ShoppingBag {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  subtotal: number;

  @ManyToMany(() => Shoe)
  @JoinTable()
  items: Shoe[];
}
