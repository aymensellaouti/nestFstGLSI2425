import { Injectable } from '@nestjs/common';
import { CreateNutriscoreDto } from './dto/create-nutriscore.dto';
import { UpdateNutriscoreDto } from './dto/update-nutriscore.dto';

@Injectable()
export class NutriscoreService {
  create(createNutriscoreDto: CreateNutriscoreDto) {
    return 'This action adds a new nutriscore';
  }

  findAll() {
    return `This action returns all nutriscore`;
  }

  findOne(id: number) {
    return `This action returns a #${id} nutriscore`;
  }

  update(id: number, updateNutriscoreDto: UpdateNutriscoreDto) {
    return `This action updates a #${id} nutriscore`;
  }

  remove(id: number) {
    return `This action removes a #${id} nutriscore`;
  }
}
