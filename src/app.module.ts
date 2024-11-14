import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FirstModule } from './first/first.module';
import { SecondController } from './second/second.controller';
import { TodoController } from './todo/todo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

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
      entities: [], 
      synchronize: true, 
      logging: true
    })
  ],
  controllers: [AppController, SecondController, TodoController],
  providers: [AppService],
})
export class AppModule { }
