import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NutriscoreService } from './nutriscore.service';
import { CreateNutriscoreDto } from './dto/create-nutriscore.dto';
import { UpdateNutriscoreDto } from './dto/update-nutriscore.dto';

@Controller('nutriscore')
export class NutriscoreController {
  constructor(private readonly nutriscoreService: NutriscoreService) {}

  @Post()
  create(@Body() createNutriscoreDto: CreateNutriscoreDto) {
    return this.nutriscoreService.create(createNutriscoreDto);
  }

  @Get()
  findAll() {
    return this.nutriscoreService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.nutriscoreService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNutriscoreDto: UpdateNutriscoreDto) {
    return this.nutriscoreService.update(+id, updateNutriscoreDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.nutriscoreService.remove(+id);
  }
}
