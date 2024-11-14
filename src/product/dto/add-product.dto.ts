import { Type } from "class-transformer";
import { IsNotEmpty, IsNumber, IsOptional, MaxLength } from "class-validator";

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
}