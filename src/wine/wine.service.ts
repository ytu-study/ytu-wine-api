import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { Pagination } from '@/wine/model/pagination.args';
import { Wine } from '@/wine/model/wine.entity';

@Injectable()
export class WineService {
  constructor(@InjectRepository(Wine) private readonly wineRepository: MongoRepository<Wine>) {
  }

  getWines(pagination?: Pagination): Promise<Wine[]> {
    const { page = 1, display = 10 } = pagination ?? {};
    return this.wineRepository.find({
      skip: (page - 1) * display,
      take: display,
    });
  }
}
