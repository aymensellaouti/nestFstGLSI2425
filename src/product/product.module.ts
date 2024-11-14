import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoEntity } from '../todo/entity/todo.entity';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { Product } from './entity/product.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([Product])
    ],
    controllers: [ProductController],
    providers: [ProductService]
})
export class ProductModule {}
