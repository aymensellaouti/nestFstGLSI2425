import { Body, Controller, Get, Post } from '@nestjs/common';
import { Product } from './entity/product.entity';
import { AddProductDto } from './dto/add-product.dto';
import { ProductService } from './product.service';

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
}
