import { ShoppingBag } from './shopping-bag/entities/shopping-bag.entity';
import { ShoeSizeStock } from './shoes/entities/shoe-size-stock.entity';
import { AppUser } from './app-user/entities/app-user.entity';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShoesModule } from './shoes/shoes.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Shoe } from './shoes/entities/shoe.entity';
import { ShoeCategory } from './shoes/entities/shoe-category.entity';
import { Size } from './shoes/entities/size.entity';
import { ConfigModule } from '@nestjs/config';
import { AppUserModule } from './app-user/app-user.module';
import { ShoeDetails } from './shoes/entities/shoe-details.entity';
import { ShoppingBagModule } from './shopping-bag/shopping-bag.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      url: process.env.LOCAL_DATABASE_URL,
      entities: [Shoe, Size, AppUser, ShoeSizeStock, ShoppingBag],
      synchronize: true,
      logging: false,
    }),
    ShoesModule,
    AppUserModule,
    ShoppingBagModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
