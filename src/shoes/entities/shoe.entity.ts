import { ShoeSizeStock } from './shoe-size-stock.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

enum Category {
  Running = 'RUNNING',
  Walking = 'Walking',
  Formal = 'FORMAL',
}
@Entity()
export class Shoe {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  image: string;

  @Column({ type: 'enum', enum: Category })
  category: Category;

  @OneToMany(() => ShoeSizeStock, (shoeSizeStock) => shoeSizeStock.shoe, {
    eager: true,
  })
  details: ShoeSizeStock;
}
