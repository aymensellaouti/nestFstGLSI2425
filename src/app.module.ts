import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FirstModule } from './first/first.module';
import { SecondController } from './second/second.controller';
import { TodoController } from './todo/todo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModule } from './product/product.module';
import { Product } from './product/entity/product.entity';
import { TodoEntity } from './todo/entity/todo.entity';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [
    FirstModule,
    TypeOrmModule.forRoot({ 
      type: 'mysql', 
      host: 'localhost', 
      port: 3306, 
      username: 'root', 
      password: '', 
      database: 'igl42425', 
      autoLoadEntities: true,
      synchronize: true, 
      logging: true
    }),
    ProductModule,
    TodoModule
  ],
  controllers: [AppController, SecondController],
  providers: [AppService],
})
export class AppModule { }
