import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ShoeCategory } from './shoe-category.entity';
import { ShoeSize } from './shoe-size.entity';

@Entity()
export class Shoe {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column('simple-array')
  images: string[];

  @ManyToOne(() => ShoeCategory, (category) => category.shoes)
  category: ShoeCategory;

  @ManyToMany(() => ShoeSize)
  @JoinTable()
  sizes: ShoeSize[];
}
