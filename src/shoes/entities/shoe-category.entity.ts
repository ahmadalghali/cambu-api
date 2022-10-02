import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Shoe } from './shoe.entity';

@Entity()
export class ShoeCategory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Shoe, (shoe) => shoe.category)
  shoes: Shoe[];
}
