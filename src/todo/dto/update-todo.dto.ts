import { TodoStatusEnum } from "../todo.model";

export interface UpdateTodoDto {
    name: string;
    description: string;
    status: TodoStatusEnum;
}