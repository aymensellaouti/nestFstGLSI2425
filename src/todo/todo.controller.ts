import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post } from '@nestjs/common';
import { Todo } from './todo.model';
import { AddTodoDto } from './dto/add-todo.dto';
import {v4 as uuidv4} from 'uuid';
import { UpdateTodoDto } from './dto/update-todo.dto';
@Controller('todo')
export class TodoController {
    todos: Todo[] = [];

    @Get()
    getAllFake(): Todo[] {
        return this.todos;
    }

    @Get(':id')
    getOneFake(@Param('id') id: string): Todo {
        return this.getTodoById(id);
    }
    @Post()
    createFake(
        @Body() addTodoDto: AddTodoDto
    ): Todo {
        const { name, description } = addTodoDto;
        const newTodo = new Todo(uuidv4(), name, description);
        this.todos.push(newTodo);
        return newTodo;
    }

    @Patch(':id')
    updateFake(
        @Param('id') id: string, 
        @Body() updateTodoDto: UpdateTodoDto
    ): Todo {
        const { name, description, status } = updateTodoDto;
        const todo = this.getTodoById(id);
        todo.name = name ?? todo.name;
        todo.description = description ?? todo.description;
        todo.status = status ?? todo.status;
        return todo;
    }

    @Delete(':id')
    deleteFake(@Param('id') id: string) {
        const nbTodo = this.todos.length;
        this.todos = this.todos.filter((todo) => {
            if (todo.id != id) return true;
            else {
                return false;
            }
        });
        if (nbTodo == this.todos.length)
            throw new NotFoundException(`Le todo d'id ${id} n'existe pas`);
        return { count: 1 };
    }

    private getTodoById(id: string): Todo | null {
        const todo = this.todos.find((todo) => todo.id == id);
        if (!todo) throw new NotFoundException(`Le todo d'id ${id} n'existe pas`);
        return todo;
    }
}
