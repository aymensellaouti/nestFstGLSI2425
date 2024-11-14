import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Product } from './entity/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { AddProductDto } from './dto/add-product.dto';

@Injectable()
export class ProductService {
   
    constructor(
        /**
         * Bech iwafrelna un ensmble de méthodes ikhaliwna
         * Na7kiw m3a el DB mta3na concernant l'entité
         * Product
         * Ikhalina zada nassn3ou nos propres méthodes
         */
        @InjectRepository(Product)
        public productRepository: Repository<Product>
    ) {}

    getProducts(): Product[] {
        // Hna bech na7kiw m3a el DB ebch njibou la liste des produits
        // 
        return []
    }

    addProduct(addProductDto: AddProductDto): Promise<Product> {
        return this.productRepository.save(addProductDto);
    }
}
