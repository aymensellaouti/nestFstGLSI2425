import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { Product } from './entity/product.entity';
import { AddProductDto } from './dto/add-product.dto';
import { ProductService } from './product.service';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('product')
export class ProductController {
    constructor(
        private productService: ProductService
    ) {}
    // Il recoit les requetes 

    // @Get()
    // getProducts():Product[] {
    //     // Le service eli ia3ref ijib la liste des produits
    //     return [];
    // }
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
}
