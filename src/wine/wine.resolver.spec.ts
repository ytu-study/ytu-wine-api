import { Test, TestingModule } from '@nestjs/testing';
import { WineResolver } from './wine.resolver';

describe('WineResolver', () => {
  let resolver: WineResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WineResolver],
    }).compile();

    resolver = module.get<WineResolver>(WineResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
