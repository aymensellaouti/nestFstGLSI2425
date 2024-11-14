import { PartialType } from "@nestjs/mapped-types";
import { Type } from "class-transformer";
import { IsNotEmpty, IsNumber, IsOptional, MaxLength } from "class-validator";
import { AddProductDto } from "./add-product.dto";

export class UpdateProductDto extends PartialType(AddProductDto) {}