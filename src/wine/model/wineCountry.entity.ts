import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity } from 'typeorm';
import { Currency } from '@/types/currency';
import { BaseEntity } from '@/utils/entity';
import { WineGrape } from './wineGrape.entity';

const description = '와인 국가';

@Entity()
@ObjectType({ description })
export class WineCountry extends BaseEntity(description) {
  @Column()
  @Field({ description: '' })
  code: string;

  @Column()
  @Field({ description: '' })
  name: string;

  @Column()
  @Field({ description: '' })
  nativeName: string;

  @Column()
  @Field({ description: '' })
  seoName: string;

  @Column()
  @Field(() => Currency, { description: '' })
  currency: Currency;

  @Column()
  @Field(() => Int, { description: '' })
  regionsCount: number;

  @Column()
  @Field(() => Int, { description: '' })
  usersCount: number;

  @Column()
  @Field(() => Int, { description: '' })
  winesCount: number;

  @Column()
  @Field(() => Int, { description: '' })
  wineriesCount: number;

  @Column()
  @Field(() => [WineGrape], { description: '' })
  mostUsedGrapes: WineGrape[];

  constructor(wineCountry: Partial<WineCountry>) {
    super(WineCountry, wineCountry);
  }
}
