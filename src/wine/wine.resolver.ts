import { Args, Query, Resolver } from '@nestjs/graphql';
import { WineGrape } from '@/wine/model/wineGrape.entity';
import { WineFood } from '@/wine/model/wineFood.entity';
import { VivinoWine } from '@/wine/model/vivinoWine.entity';
import { PaginationArgs } from '@/args/pagination.args';
import { Wine } from '@/wine/model/wine.entity';
import { WineService } from '@/wine/wine.service';
import { WineCountry } from './model/wineCountry.entity';

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

  @Query(() => VivinoWine, { description: '와인 상세목록 조회' })
  getVivinoWine(@Args('id') id: string): Promise<VivinoWine> {
    return this.wineService.getVivinoWine(id);
  }

  @Query(() => [WineCountry], { description: '와인 국가 목록 조회' })
  getWineCountries(@Args() paginationArgs: PaginationArgs): Promise<WineCountry[]> {
    return this.wineService.getWineCountries(paginationArgs);
  }

  @Query(() => WineCountry, { description: '와인 국가 상세목록 조회' })
  getWineCountry(@Args('id') id: string): Promise<WineCountry> {
    return this.wineService.getWineCountry(id);
  }

  @Query(() => [WineFood], { description: '와인과 어울리는 음식 목록 조회' })
  getWineFoods(@Args() paginationArgs: PaginationArgs): Promise<WineFood[]> {
    return this.wineService.getWineFoods(paginationArgs);
  }

  @Query(() => WineFood, { description: '와인과 어울리는 음식 상세목록 조회' })
  getWineFood(@Args('id') id: string): Promise<WineFood> {
    return this.wineService.getWineFood(id);
  }

  @Query(() => [WineGrape], { description: '와인 포도 품종 목록 조회' })
  getWineGrapes(@Args() paginationArgs: PaginationArgs): Promise<WineGrape[]> {
    return this.wineService.getWineGrapes(paginationArgs);
  }

  @Query(() => WineGrape, { description: '와인 포도 품종 상세목록 조회' })
  getWineGrape(@Args('id') id: string): Promise<WineGrape> {
    return this.wineService.getWineGrape(id);
  }
}
