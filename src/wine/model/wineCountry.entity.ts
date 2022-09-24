import { ObjectType } from '@nestjs/graphql';
import { Column, Entity } from 'typeorm';
import { Currency } from '@/types/currency';
import { WineGrape } from '@/types/wineGrape';
import { WineCountry } from '@/types/wineCountry';
import { BaseEntity } from '@/utils/entity';

@Entity({ name: 'wine_country' })
@ObjectType({ description: '와인 국가' })
export class WineCountryEntity extends BaseEntity(WineCountry) implements WineCountry {
  @Column()
  code: string;

  @Column()
  name: string;

  @Column()
  currency: Currency;

  @Column()
  mostUsedGrapes: WineGrape[];

  @Column()
  nativeName: string;

  @Column()
  regionsCount: number;

  @Column()
  seoName: string;

  @Column()
  usersCount: number;

  @Column()
  wineriesCount: number;

  @Column()
  winesCount: number;

  constructor(wineCountry: Partial<WineCountryEntity>) {
    super(WineCountryEntity, wineCountry);
  }
}
