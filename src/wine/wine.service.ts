import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { PaginationData } from '@/types/PaginationData';
import { WineType } from '@/wine/model/wineType.entity';
import { WineCountry } from '@/wine/model/wineCountry.entity';
import { WineFood } from '@/wine/model/wineFood.entity';
import { WineGrape } from '@/wine/model/wineGrape.entity';
import { PaginationArgs } from '@/args/pagination.args';
import { VivinoWine } from '@/wine/model/vivinoWine.entity';
import { Wine } from '@/wine/model/wine.entity';

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

  async getVivinoWines({ page, display }: PaginationArgs): Promise<PaginationData<VivinoWine[]>> {
    const [data, totalCount] = await this.vivinoWineRepository.findAndCount({
      skip: (page - 1) * display,
      take: display,
    });

    return new PaginationData({ page, display, totalCount, data });
  }

  getVivinoWine(id: string): Promise<VivinoWine> {
    return this.vivinoWineRepository.findOneBy({ _id: id });
  }

  async getWineCountries({ page, display }: PaginationArgs): Promise<PaginationData<WineCountry[]>> {
    const [data, totalCount] = await this.wineCountryRepository.findAndCount({
      skip: (page - 1) * display,
      take: display,
    });

    return new PaginationData({ page, display, totalCount, data });
  }

  getWineCountry(id: string): Promise<WineCountry> {
    return this.wineCountryRepository.findOneBy({ _id: id });
  }

  async getWineFoods({ page, display }: PaginationArgs): Promise<PaginationData<WineFood[]>> {
    const [data, totalCount] = await this.wineFoodRepository.findAndCount({
      skip: (page - 1) * display,
      take: display,
    });

    return new PaginationData({ page, display, totalCount, data });
  }

  getWineFood(id: string): Promise<WineFood> {
    return this.wineFoodRepository.findOneBy({ _id: id });
  }

  async getWineGrapes({ page, display }: PaginationArgs): Promise<PaginationData<WineGrape[]>> {
    const [data, totalCount] = await this.wineGrapeRepository.findAndCount({
      skip: (page - 1) * display,
      take: display,
    });

    return new PaginationData({ page, display, totalCount, data });
  }

  getWineGrape(id: string): Promise<WineGrape> {
    return this.wineGrapeRepository.findOneBy({ _id: id });
  }

  async getWineTypes({ page, display }: PaginationArgs): Promise<PaginationData<WineType[]>> {
    const [data, totalCount] = await this.wineTypeRepository.findAndCount({
      skip: (page - 1) * display,
      take: display,
    });

    return new PaginationData({ page, display, totalCount, data });
  }

  getWineType(id: string): Promise<WineType> {
    return this.wineTypeRepository.findOneBy({ _id: id });
  }
}
