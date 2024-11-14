import { Module } from '@nestjs/common';
import { NutriscoreService } from './nutriscore.service';
import { NutriscoreController } from './nutriscore.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Nutriscore } from './entities/nutriscore.entity';

@Module({
  controllers: [NutriscoreController],
  providers: [NutriscoreService],
  imports: [TypeOrmModule.forFeature([Nutriscore])]
})
export class NutriscoreModule {}
