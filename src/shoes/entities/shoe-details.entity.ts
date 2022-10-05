import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Shoe } from './shoe.entity';
import { Size } from './size.entity';

@Entity()
export class ShoeDetails {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  stock: number;

  // @OneToOne(() => Size, (size) => size.details)
  @JoinColumn()
  size: Size;

  // @OneToOne(() => Shoe, (shoe) => shoe.details)
  @JoinColumn()
  shoe: Shoe;
}
