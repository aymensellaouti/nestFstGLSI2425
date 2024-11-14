import { Test, TestingModule } from '@nestjs/testing';
import { NutriscoreService } from './nutriscore.service';

describe('NutriscoreService', () => {
  let service: NutriscoreService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NutriscoreService],
    }).compile();

    service = module.get<NutriscoreService>(NutriscoreService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
