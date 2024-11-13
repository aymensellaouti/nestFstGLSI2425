import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FirstModule } from './first/first.module';
import { SecondController } from './second/second.controller';
import { TodoController } from './todo/todo.controller';

@Module({
  imports: [FirstModule],
  controllers: [AppController, SecondController, TodoController],
  providers: [AppService],
})
export class AppModule {}
