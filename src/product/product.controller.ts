import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Product } from './entity/product.entity';
import { AddProductDto } from './dto/add-product.dto';
import { ProductService } from './product.service';
import { UpdateProductDto } from './dto/update-product.dto';
import { UpdateResult } from 'typeorm';

@Controller('product')
export class ProductController {
    constructor(
        private productService: ProductService
    ) {}
    // Il recoit les requetes 

    @Get()
    getProducts(): Promise<Product[]> {
        return this.productService.findAll();
    }
    @Get(':id')
    getProductById(
        @Param('id') id: string
    ): Promise<Product> {
        return this.productService.findOne(id);
    }
    @Post()
    addProduct(
        @Body() addProductDto: AddProductDto
    ): Promise<Product> {
        return this.productService.addProduct(addProductDto);
    }
    
    @Patch(':id')
    updateProduct(
        @Param('id') id: string,
        @Body() updateProductDto: UpdateProductDto
    ): Promise<Product> {
        return this.productService.updateProduct(id, updateProductDto);
    }
    
    @Delete(':id')
    deleteProduct(
        @Param('id') id: string
    ): Promise<UpdateResult> {
        return this.productService.softDelete(id);
    }
    
    @Patch('restore/:id')
    restoreProduct(
        @Param('id') id: string
    ): Promise<UpdateResult> {
        return this.productService.restoreProduct(id);
    }
}
