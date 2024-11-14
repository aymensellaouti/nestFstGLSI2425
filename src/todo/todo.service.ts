import { Injectable } from '@nestjs/common';
import { TodoEntity } from './entity/todo.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CrudService } from '../common/generics/crud.service';
import { TodoStatusEnum } from './todo.model';
import { getDateInterval } from '../common/db utilitaires/getByInterval.db-utilities';
import { paginate } from '../common/db utilitaires/paginate.db-utilities';

@Injectable()
export class TodoService extends CrudService<TodoEntity> {
    constructor(
        @InjectRepository(TodoEntity)
        public todoRepository: Repository<TodoEntity>
    ) {
        super(todoRepository);
    }

    getTodosCreatedInInterval(startDate: Date, endDate: Date) {
        const qb = this.todoRepository.createQueryBuilder('t');
        getDateInterval<TodoEntity>(qb, 'created_at', startDate, endDate )
        qb.orderBy('created_at', 'DESC');
       return qb.getMany();
    }
    getTodosUpdatedInInterval(startDate: Date, endDate: Date) {
        const qb = this.todoRepository.createQueryBuilder('t');
        getDateInterval<TodoEntity>(qb, 'updated_at', startDate, endDate );
        paginate<TodoEntity>(qb, 1, 5);
        return qb.getMany();
    }
}
