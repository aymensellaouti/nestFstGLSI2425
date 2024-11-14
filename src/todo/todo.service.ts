import { Injectable } from '@nestjs/common';
import { TodoEntity } from './entity/todo.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TodoService {
    constructor(
        @InjectRepository(TodoEntity)
        public productRepository: Repository<TodoEntity>
    ) {}
}
