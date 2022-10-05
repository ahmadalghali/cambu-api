import { ShoeSizeStock } from './shoe-size-stock.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

enum SizeName {
  UK_5 = 'UK 5',
  UK_5_5 = 'UK 5.5',
  UK_6 = 'UK 6',
  UK_6_5 = 'UK 6.5',
  UK_7 = 'UK 7',
  UK_7_5 = 'UK 7.5',
  UK_8 = 'UK 8',
  UK_8_5 = 'UK 8.5',
  UK_9 = 'UK 9',
  UK_9_5 = 'UK 9.5',
  UK_10 = 'UK 10',
  UK_10_5 = 'UK 10.5',
  UK_11 = 'UK 11',
}
@Entity()
export class Size {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'enum', enum: SizeName })
  name: SizeName;

  @OneToMany(() => ShoeSizeStock, (details) => details.size)
  details: ShoeSizeStock;
}
