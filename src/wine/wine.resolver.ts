import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { PaginationArgs } from '@/args/pagination.args';
import { Wine } from '@/wine/model/wine.entity';
import { WineService } from '@/wine/wine.service';

@Resolver()
export class WineResolver {
  constructor(private readonly wineService: WineService) {
  }

  @Query(() => [Wine], { description: '와인 목록 조회' })
  getWines(@Args() paginationArgs: PaginationArgs): Promise<Wine[]> {
    return this.wineService.getWines(paginationArgs);
  }
}
