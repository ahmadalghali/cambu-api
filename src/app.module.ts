import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShoesModule } from './shoes/shoes.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Shoe } from './shoes/entities/shoe.entity';
import { ShoeCategory } from './shoes/entities/shoe-category.entity';
import { ShoeSize } from './shoes/entities/shoe-size.entity';
import { AppUser } from './shoes/entities/app-user.entity';
import { FavouritesList } from './shoes/entities/favourites-list.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      // host: process.env.DB_HOST,
      // port: +process.env.DB_PORT,
      // username: process.env.DB_USERNAME,
      // password: process.env.DB_PASSWORD,
      // database: process.env.DATABASE,
      url: process.env.LOCAL_DATABASE_URL,
      entities: [Shoe, ShoeCategory, ShoeSize, AppUser, FavouritesList],
      synchronize: true,
    }),
    ShoesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
