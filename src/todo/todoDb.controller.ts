import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post } from '@nestjs/common';
import { Todo } from './todo.model';
import { AddTodoDto } from './dto/add-todo.dto';
import {v4 as uuidv4} from 'uuid';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { TodoService } from './todo.service';
import { TodoEntity } from './entity/todo.entity';
@Controller({
    path:'todo',
    version: '1'
})
export class TodoDBController {
    constructor(
        private todoService: TodoService
    ) {}
    @Get()
    getAll(): Promise<TodoEntity[]> {
       
       return this.todoService.findAll()
    }
    // @Get('interval')
    // getAllInInterval(): Promise<TodoEntity[]> {
    // //    date1 = new Date() 
    // //    return this.todoService.getTodosInInterval()
    // }

    @Get(':id')
    getOne(@Param('id') id: string): Promise<TodoEntity> {
        return this.todoService.findOne(id);
    }
    @Post()
    createFake(
        @Body() addTodoDto: AddTodoDto
    ): Promise<TodoEntity> {
        return this.todoService.create(addTodoDto);
    }

    @Patch(':id')
    updateFake(
        @Param('id') id: string, 
        @Body() updateTodoDto: UpdateTodoDto
    ): Promise<TodoEntity> {
        return this.todoService.update(id, updateTodoDto);
    }

    @Delete(':id')
    deleteFake(@Param('id') id: string) {
        return this.todoService.softDelete(id);
    }
}
