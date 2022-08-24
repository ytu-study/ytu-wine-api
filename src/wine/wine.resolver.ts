import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { Wine } from '@/wine/model/wine.entity';
import { WineService } from '@/wine/wine.service';

@Resolver()
export class WineResolver {
  constructor(private readonly wineService: WineService) {
  }

  @Query(() => [Wine], { description: '와인 목록 조회' })
  getWines(
    @Args('page', { type: () => Int, defaultValue: 1 }) page = 1,
    @Args('display', { type: () => Int, defaultValue: 10 }) display = 10,
  ): Promise<Wine[]> {
    return this.wineService.getWines(page, display);
  }
}
