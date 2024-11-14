import { Test, TestingModule } from '@nestjs/testing';
import { NutriscoreController } from './nutriscore.controller';
import { NutriscoreService } from './nutriscore.service';

describe('NutriscoreController', () => {
  let controller: NutriscoreController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NutriscoreController],
      providers: [NutriscoreService],
    }).compile();

    controller = module.get<NutriscoreController>(NutriscoreController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
