import { Args, Query, Resolver } from '@nestjs/graphql';
import { PaginationArgs } from '@/args/pagination.args';
import { PaginationVivinoWine } from '@/wine/model/paginationVivinoWine';
import { PaginationWineCountry } from '@/wine/model/paginationWineCountry';
import { PaginationWineFood } from '@/wine/model/paginationWineFood';
import { PaginationWineGrape } from '@/wine/model/paginationWineGrape';
import { PaginationWineType } from '@/wine/model/paginationWineType';
import { VivinoWine } from '@/wine/model/vivinoWine.entity';
import { Wine } from '@/wine/model/wine.entity';
import { WineFood } from '@/wine/model/wineFood.entity';
import { WineGrape } from '@/wine/model/wineGrape.entity';
import { WineType } from '@/wine/model/wineType.entity';
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

  @Query(() => PaginationVivinoWine, { description: '와인 목록 조회' })
  getVivinoWines(@Args() paginationArgs: PaginationArgs): Promise<PaginationVivinoWine> {
    return this.wineService.getVivinoWines(paginationArgs);
  }

  @Query(() => VivinoWine, { description: '와인 상세목록 조회' })
  getVivinoWine(@Args('id') id: string): Promise<VivinoWine> {
    return this.wineService.getVivinoWine(id);
  }

  @Query(() => PaginationWineCountry, { description: '와인 국가 목록 조회' })
  getWineCountries(@Args() paginationArgs: PaginationArgs): Promise<PaginationWineCountry> {
    return this.wineService.getWineCountries(paginationArgs);
  }

  @Query(() => WineCountry, { description: '와인 국가 상세목록 조회' })
  getWineCountry(@Args('id') id: string): Promise<WineCountry> {
    return this.wineService.getWineCountry(id);
  }

  @Query(() => PaginationWineFood, { description: '와인과 어울리는 음식 목록 조회' })
  getWineFoods(@Args() paginationArgs: PaginationArgs): Promise<PaginationWineFood> {
    return this.wineService.getWineFoods(paginationArgs);
  }

  @Query(() => WineFood, { description: '와인과 어울리는 음식 상세목록 조회' })
  getWineFood(@Args('id') id: string): Promise<WineFood> {
    return this.wineService.getWineFood(id);
  }

  @Query(() => PaginationWineGrape, { description: '와인 포도 품종 목록 조회' })
  getWineGrapes(@Args() paginationArgs: PaginationArgs): Promise<PaginationWineGrape> {
    return this.wineService.getWineGrapes(paginationArgs);
  }

  @Query(() => WineGrape, { description: '와인 포도 품종 상세목록 조회' })
  getWineGrape(@Args('id') id: string): Promise<WineGrape> {
    return this.wineService.getWineGrape(id);
  }

  @Query(() => PaginationWineType, { description: '와인 타입 목록 조회' })
  getWineTypes(@Args() paginationArgs: PaginationArgs): Promise<PaginationWineType> {
    return this.wineService.getWineTypes(paginationArgs);
  }

  @Query(() => WineType, { description: '와인 타입 상세목록 조회' })
  getWineType(@Args('id') id: string): Promise<WineType> {
    return this.wineService.getWineType(id);
  }
}
