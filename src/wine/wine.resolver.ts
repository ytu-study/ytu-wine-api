import { Args, Query, Resolver } from '@nestjs/graphql';
import { ObjectIdArgs } from '@/args/objectId.args';
import { PaginationArgs } from '@/args/pagination.args';
import { PaginatedVivinoWine } from '@/wine/model/paginatedVivinoWine';
import { PaginatedWineCountry } from '@/wine/model/paginatedWineCountry';
import { PaginatedWineType } from '@/wine/model/paginatedWineType';
import { PaginationWineFood } from '@/wine/model/paginationWineFood';
import { PaginationWineGrape } from '@/wine/model/paginationWineGrape';
import { VivinoWineEntity } from '@/wine/model/vivinoWine.entity';
import { Wine } from '@/wine/model/wine.entity';
import { WineFoodEntity } from '@/wine/model/wineFood.entity';
import { WineGrapeEntity } from '@/wine/model/wineGrape.entity';
import { WineTypeEntity } from '@/wine/model/wineType.entity';
import { WineService } from '@/wine/wine.service';
import { WineCountryEntity } from './model/wineCountry.entity';

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

  @Query(() => PaginatedVivinoWine, { description: '와인 목록 조회' })
  getVivinoWines(@Args() paginationArgs: PaginationArgs): Promise<PaginatedVivinoWine> {
    return this.wineService.getVivinoWines(paginationArgs);
  }

  @Query(() => VivinoWineEntity, { description: '와인 상세목록 조회' })
  getVivinoWine(@Args() id: ObjectIdArgs): Promise<VivinoWineEntity> {
    return this.wineService.getVivinoWine(id);
  }

  @Query(() => PaginatedWineCountry, { description: '와인 국가 목록 조회' })
  getWineCountries(@Args() paginationArgs: PaginationArgs): Promise<PaginatedWineCountry> {
    return this.wineService.getWineCountries(paginationArgs);
  }

  @Query(() => WineCountryEntity, { description: '와인 국가 상세목록 조회' })
  getWineCountry(@Args() id: ObjectIdArgs): Promise<WineCountryEntity> {
    return this.wineService.getWineCountry(id);
  }

  @Query(() => PaginationWineFood, { description: '와인과 어울리는 음식 목록 조회' })
  getWineFoods(@Args() paginationArgs: PaginationArgs): Promise<PaginationWineFood> {
    return this.wineService.getWineFoods(paginationArgs);
  }

  @Query(() => WineFoodEntity, { description: '와인과 어울리는 음식 상세목록 조회' })
  getWineFood(@Args() id: ObjectIdArgs): Promise<WineFoodEntity> {
    return this.wineService.getWineFood(id);
  }

  @Query(() => PaginationWineGrape, { description: '와인 포도 품종 목록 조회' })
  getWineGrapes(@Args() paginationArgs: PaginationArgs): Promise<PaginationWineGrape> {
    return this.wineService.getWineGrapes(paginationArgs);
  }

  @Query(() => WineGrapeEntity, { description: '와인 포도 품종 상세목록 조회' })
  getWineGrape(@Args() id: ObjectIdArgs): Promise<WineGrapeEntity> {
    return this.wineService.getWineGrape(id);
  }

  @Query(() => PaginatedWineType, { description: '와인 타입 목록 조회' })
  getWineTypes(@Args() paginationArgs: PaginationArgs): Promise<PaginatedWineType> {
    return this.wineService.getWineTypes(paginationArgs);
  }

  @Query(() => WineTypeEntity, { nullable: true, description: '와인 타입 상세목록 조회' })
  getWineType(@Args() id: ObjectIdArgs): Promise<WineTypeEntity> {
    return this.wineService.getWineType(id);
  }
}
