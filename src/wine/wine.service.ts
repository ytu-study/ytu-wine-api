import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { ObjectIdArgs } from '@/args/objectId.args';
import { PaginationArgs } from '@/args/pagination.args';
import { PaginatedVivinoWine } from '@/wine/model/paginatedVivinoWine';
import { PaginatedWineCountry } from '@/wine/model/paginatedWineCountry';
import { PaginatedWineType } from '@/wine/model/paginatedWineType';
import { PaginationWineFood } from '@/wine/model/paginationWineFood';
import { PaginationWineGrape } from '@/wine/model/paginationWineGrape';
import { VivinoWineEntity } from '@/wine/model/vivinoWine.entity';
import { Wine } from '@/wine/model/wine.entity';
import { WineCountryEntity } from '@/wine/model/wineCountry.entity';
import { WineFoodEntity } from '@/wine/model/wineFood.entity';
import { WineGrapeEntity } from '@/wine/model/wineGrape.entity';
import { WineTypeEntity } from '@/wine/model/wineType.entity';

@Injectable()
export class WineService {
  constructor(
    @InjectRepository(Wine) private readonly wineRepository: MongoRepository<Wine>,
    @InjectRepository(VivinoWineEntity) private readonly vivinoWineRepository: MongoRepository<VivinoWineEntity>,
    @InjectRepository(WineCountryEntity) private readonly wineCountryRepository: MongoRepository<WineCountryEntity>,
    @InjectRepository(WineFoodEntity) private readonly wineFoodRepository: MongoRepository<WineFoodEntity>,
    @InjectRepository(WineGrapeEntity) private readonly wineGrapeRepository: MongoRepository<WineGrapeEntity>,
    @InjectRepository(WineTypeEntity) private readonly wineTypeRepository: MongoRepository<WineTypeEntity>,
  ) {
  }

  getWines({ page, display }: PaginationArgs): Promise<Wine[]> {
    return this.wineRepository.find({
      skip: (page - 1) * display,
      take: display,
    });
  }

  getWine(id: string): Promise<Wine> {
    return this.wineRepository.findOneBy({ _id: id });
  }

  getWineIds(): Promise<string[]> {
    return this.wineRepository.find({ select: ['_id'] }).then(wines => wines.map(wine => wine._id));
  }

  async getVivinoWines({ page, display }: PaginationArgs): Promise<PaginatedVivinoWine> {
    const [data, totalCount] = await this.vivinoWineRepository.findAndCount({
      skip: (page - 1) * display,
      take: display,
    });

    return { page, display, totalCount, items: data };
  }

  getVivinoWine({ id }: ObjectIdArgs): Promise<VivinoWineEntity> {
    return this.vivinoWineRepository.findOneBy({ _id: id });
  }

  async getWineCountries({ page, display }: PaginationArgs): Promise<PaginatedWineCountry> {
    const [data, totalCount] = await this.wineCountryRepository.findAndCount({
      skip: (page - 1) * display,
      take: display,
    });

    return { page, display, totalCount, items: data };
  }

  getWineCountry({ id }: ObjectIdArgs): Promise<WineCountryEntity> {
    return this.wineCountryRepository.findOneBy({ _id: id });
  }

  async getWineFoods({ page, display }: PaginationArgs): Promise<PaginationWineFood> {
    const [data, totalCount] = await this.wineFoodRepository.findAndCount({
      skip: (page - 1) * display,
      take: display,
    });

    return { page, display, totalCount, items: data };
  }

  getWineFood({ id }: ObjectIdArgs): Promise<WineFoodEntity> {
    return this.wineFoodRepository.findOneBy({ _id: id });
  }

  async getWineGrapes({ page, display }: PaginationArgs): Promise<PaginationWineGrape> {
    const [data, totalCount] = await this.wineGrapeRepository.findAndCount({
      skip: (page - 1) * display,
      take: display,
    });

    return { page, display, totalCount, items: data };
  }

  getWineGrape({ id }: ObjectIdArgs): Promise<WineGrapeEntity> {
    return this.wineGrapeRepository.findOneBy({ _id: id });
  }

  async getWineTypes({ page, display }: PaginationArgs): Promise<PaginatedWineType> {
    const [data, totalCount] = await this.wineTypeRepository.findAndCount({
      skip: (page - 1) * display,
      take: display,
    });

    return { page, display, totalCount, items: data };
  }

  async getWineType({ id }: ObjectIdArgs): Promise<WineTypeEntity> {
    return this.wineTypeRepository.findOneBy({ _id: id });
  }
}
