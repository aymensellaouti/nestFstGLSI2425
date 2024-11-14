import { Type } from "class-transformer";
import { IsNotEmpty, IsNumber, IsOptional, MaxLength } from "class-validator";
import { Ingredient } from "../../ingredient/entities/ingredient.entity";
import { Nutriscore } from "../../nutriscore/entities/nutriscore.entity";

export class AddProductDto {
    @IsNotEmpty()
    @MaxLength(50)
    name: string;
    @Type(() => Number)
    @IsNumber()
    @IsNotEmpty()
    price: number;
    @IsOptional()
    @MaxLength(255)
    description: string;
    @IsOptional()
    ingredients: 
    Ingredient[];
    @IsOptional()
    nutriscore: Nutriscore[];
}