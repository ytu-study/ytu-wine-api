import { ObjectType } from '@nestjs/graphql';
import { Entity } from 'typeorm';
import { WineCountry } from '@/types/wineCountry';
import { BaseEntity } from '@/utils/entity';

@Entity({ name: 'wine_country' })
@ObjectType({ description: '와인 국가' })
export class WineCountryEntity extends BaseEntity(WineCountry) {
  constructor(wineCountry: Partial<WineCountryEntity>) {
    super(WineCountryEntity, wineCountry);
  }
}
