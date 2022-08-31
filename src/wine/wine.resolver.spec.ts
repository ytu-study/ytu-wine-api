import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '@/app.module';
import { WineResolver } from './wine.resolver';

describe('WineResolver', () => {
  let resolver: WineResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    resolver = module.get<WineResolver>(WineResolver);
  });

  it('getWines', async () => {
    const wines = await resolver.getWines({ page: 1, display: 10 });
    expect(wines).not.toBeUndefined();
  });
});
