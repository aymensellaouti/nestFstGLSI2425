import { Injectable } from '@nestjs/common';
import { TodoEntity } from './entity/todo.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CrudService } from '../common/generics/crud.service';

@Injectable()
export class TodoService extends CrudService<TodoEntity> {
    constructor(
        @InjectRepository(TodoEntity)
        public todoRepository: Repository<TodoEntity>
    ) {
        super(todoRepository);
    }
}
