import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { PaginationArgs } from '@/args/pagination.args';
import { Wine } from '@/wine/model/wine.entity';

@Injectable()
export class WineService {
  constructor(@InjectRepository(Wine) private readonly wineRepository: MongoRepository<Wine>) {
  }

  getWines({ page, display }: PaginationArgs): Promise<Wine[]> {
    return this.wineRepository.find({
      skip: (page - 1) * display,
      take: display,
    });
  }
}
