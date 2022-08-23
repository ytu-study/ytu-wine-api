import { Args, Query, Resolver } from '@nestjs/graphql';
import { Pagination } from '@/wine/model/pagination.args';
import { Wine } from '@/wine/model/wine.entity';
import { WineService } from '@/wine/wine.service';

@Resolver('wine')
export class WineResolver {
  constructor(private readonly wineService: WineService) {
  }

  @Query(() => [Wine])
  getWines(@Args() pagination?: Pagination): Promise<Wine[]> {
    return this.wineService.getWines(pagination);
  }
}
