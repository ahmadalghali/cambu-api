import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ShoeSize {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  stock: number;
}
