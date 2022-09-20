import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { ObjectIdArgs } from '@/args/objectId.args';
import { PaginationArgs } from '@/args/pagination.args';
import { PaginatedVivinoWine } from '@/wine/model/paginatedVivinoWine';
import { PaginatedWineCountry } from '@/wine/model/paginatedWineCountry';
import { PaginationWineFood } from '@/wine/model/paginationWineFood';
import { PaginationWineGrape } from '@/wine/model/paginationWineGrape';
import { PaginatedWineType } from '@/wine/model/paginatedWineType';
import { VivinoWine } from '@/wine/model/vivinoWine.entity';
import { Wine } from '@/wine/model/wine.entity';
import { WineCountry } from '@/wine/model/wineCountry.entity';
import { WineFood } from '@/wine/model/wineFood.entity';
import { WineGrape } from '@/wine/model/wineGrape.entity';
import { WineType } from '@/wine/model/wineType.entity';

@Injectable()
export class WineService {
  constructor(
    @InjectRepository(Wine) private readonly wineRepository: MongoRepository<Wine>,
    @InjectRepository(VivinoWine) private readonly vivinoWineRepository: MongoRepository<VivinoWine>,
    @InjectRepository(WineCountry) private readonly wineCountryRepository: MongoRepository<WineCountry>,
    @InjectRepository(WineFood) private readonly wineFoodRepository: MongoRepository<WineFood>,
    @InjectRepository(WineGrape) private readonly wineGrapeRepository: MongoRepository<WineGrape>,
    @InjectRepository(WineType) private readonly wineTypeRepository: MongoRepository<WineType>,
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

  getVivinoWine({ id }: ObjectIdArgs): Promise<VivinoWine> {
    return this.vivinoWineRepository.findOneBy({ _id: id });
  }

  async getWineCountries({ page, display }: PaginationArgs): Promise<PaginatedWineCountry> {
    const [data, totalCount] = await this.wineCountryRepository.findAndCount({
      skip: (page - 1) * display,
      take: display,
    });

    return { page, display, totalCount, items: data };
  }

  getWineCountry({ id }: ObjectIdArgs): Promise<WineCountry> {
    return this.wineCountryRepository.findOneBy({ _id: id });
  }

  async getWineFoods({ page, display }: PaginationArgs): Promise<PaginationWineFood> {
    const [data, totalCount] = await this.wineFoodRepository.findAndCount({
      skip: (page - 1) * display,
      take: display,
    });

    return { page, display, totalCount, items: data };
  }

  getWineFood({ id }: ObjectIdArgs): Promise<WineFood> {
    return this.wineFoodRepository.findOneBy({ _id: id });
  }

  async getWineGrapes({ page, display }: PaginationArgs): Promise<PaginationWineGrape> {
    const [data, totalCount] = await this.wineGrapeRepository.findAndCount({
      skip: (page - 1) * display,
      take: display,
    });

    return { page, display, totalCount, items: data };
  }

  getWineGrape({ id }: ObjectIdArgs): Promise<WineGrape> {
    return this.wineGrapeRepository.findOneBy({ _id: id });
  }

  async getWineTypes({ page, display }: PaginationArgs): Promise<PaginatedWineType> {
    const [data, totalCount] = await this.wineTypeRepository.findAndCount({
      skip: (page - 1) * display,
      take: display,
    });

    return { page, display, totalCount, items: data };
  }

  async getWineType({ id }: ObjectIdArgs): Promise<WineType> {
    return this.wineTypeRepository.findOneBy({ _id: id });
  }
}
