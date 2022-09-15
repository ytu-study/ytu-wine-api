import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
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

  getVivinoWines({ page, display }: PaginationArgs):Promise<VivinoWine[]> {
    return this.vivinoWineRepository.find({
      skip: (page - 1) * display,
      take: display,
    });
  }

  getVivinoWine(id: string): Promise<VivinoWine> {
    return this.vivinoWineRepository.findOneBy({ _id: id });
  }

  getWineCountries({ page, display }: PaginationArgs):Promise<WineCountry[]> {
    return this.wineCountryRepository.find({
      skip: (page - 1) * display,
      take: display,
    });
  }
}
