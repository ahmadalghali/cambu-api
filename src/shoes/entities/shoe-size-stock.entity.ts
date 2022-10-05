import { Size } from './size.entity';
import { Shoe } from './shoe.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity()
export class ShoeSizeStock {
  @Column({ type: 'int', name: 'sizeId', primary: true })
  @ManyToOne(() => Size, (size) => size.details, { eager: true })
  size: Size;

  @Column({ type: 'int', name: 'shoeId', primary: true })
  @ManyToOne(() => Shoe, (shoe) => shoe.details)
  shoe: Shoe;

  @Column({ precision: 0, default: 0 })
  stock: number;
}
