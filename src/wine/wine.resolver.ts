import { Args, Query, Resolver } from '@nestjs/graphql';
import { VivinoWine } from '@/wine/model/vivinoWine.entity';
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

  @Query(() => Wine, { description: '와인 상세목록 조회' })
  getWine(@Args('id') id: string): Promise<Wine> {
    return this.wineService.getWine(id);
  }

  @Query(() => [String], { description: '모든 와인 아이디 조회' })
  getWineIds(): Promise<string[]> {
    return this.wineService.getWineIds();
  }

  @Query(() => [VivinoWine], { description: '와인 목록 조회' })
  getVivinoWines(@Args() paginationArgs: PaginationArgs): Promise<VivinoWine[]> {
    return this.wineService.getVivinoWines(paginationArgs);
  }
}
