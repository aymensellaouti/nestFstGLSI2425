import { Module } from '@nestjs/common';
import { IngredientService } from './ingredient.service';
import { IngredientController } from './ingredient.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ingredient } from './entities/ingredient.entity';

@Module({
  controllers: [IngredientController],
  providers: [IngredientService],
  imports: [TypeOrmModule.forFeature([Ingredient])]
})
export class IngredientModule {}
