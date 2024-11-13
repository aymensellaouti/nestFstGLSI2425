import { Type } from "class-transformer";
import { IsEmail, IsNotEmpty, IsNumber, MinLength } from "class-validator";

export class UserDto {
    @IsEmail()
    @IsNotEmpty()
    email: string;
    @MinLength(6, {
        message: 'La taille du password doit au moins avoir 6 caractères'
    })
    password: string;
    
    @Type(() => Number)
    @IsNumber()
    @IsNotEmpty()
    age: number;
}