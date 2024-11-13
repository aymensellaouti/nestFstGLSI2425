import { IsNotEmpty, MaxLength, MinLength } from "class-validator";

export class AddTodoDto {
    @MinLength(3)
    @MaxLength(15)
    @IsNotEmpty()
    name: string;
    @MinLength(10)
    @IsNotEmpty()
    description: string;
}