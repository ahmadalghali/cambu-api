import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AppUser } from './app-user.entity';
import { Shoe } from './shoe.entity';

@Entity()
export class FavouritesList {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => AppUser)
  user: AppUser;

  @ManyToMany(() => Shoe)
  @JoinTable()
  shoes: Shoe[];
}
