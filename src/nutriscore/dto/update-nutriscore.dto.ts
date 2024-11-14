import { PartialType } from '@nestjs/mapped-types';
import { CreateNutriscoreDto } from './create-nutriscore.dto';

export class UpdateNutriscoreDto extends PartialType(CreateNutriscoreDto) {}
