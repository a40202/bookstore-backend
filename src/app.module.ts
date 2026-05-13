import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { BooksModule } from './books/books.module';
import { OrdersModule } from './orders/orders.module';
import { CartModule } from './cart/cart.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UsersModule, BooksModule, OrdersModule, CartModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
