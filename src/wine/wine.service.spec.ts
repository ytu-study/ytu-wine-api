import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '@/app.module';
import { WineService } from './wine.service';

describe('WineService', () => {
  let service: WineService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    service = module.get<WineService>(WineService);
  });

  it('getWines', async () => {
    const wines = await service.getWines({ page: 1, display: 10 });
    expect(wines).not.toBeUndefined();
  });
});
