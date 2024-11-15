import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoEntity } from './entity/todo.entity';
import { TodoDBController } from './todoDb.controller';

@Module({
    controllers: [TodoController, TodoDBController],
    providers: [TodoService],
    imports: [
        TypeOrmModule.forFeature([TodoEntity])
    ]
})
export class TodoModule {}
