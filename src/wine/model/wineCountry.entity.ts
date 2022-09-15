import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Expose, plainToClass } from 'class-transformer';
import { Column, Entity, ObjectIdColumn } from 'typeorm';
import { Currency } from '@/types/currency';
import { WineGrape } from './wineGrape.entity';

@Entity()
@ObjectType({ description: '와인 국가' })
export class WineCountry {
  @Expose()
  @ObjectIdColumn()
  @Field({ description: 'objectId' })
  _id?: string;

  @Expose()
  @Column()
  @Field({ description: '' })
  code: string;

  @Expose()
  @Column()
  @Field({ description: '' })
  name: string;

  @Expose()
  @Column()
  @Field({ description: '' })
  nativeName: string;

  @Expose()
  @Column()
  @Field({ description: '' })
  seoName: string;

  @Expose()
  @Column()
  @Field(() => Currency, { description: '' })
  currency: Currency;

  @Expose()
  @Column()
  @Field(() => Int, { description: '' })
  regionsCount: number;

  @Expose()
  @Column()
  @Field(() => Int, { description: '' })
  usersCount: number;

  @Expose()
  @Column()
  @Field(() => Int, { description: '' })
  winesCount: number;

  @Expose()
  @Column()
  @Field(() => Int, { description: '' })
  wineriesCount: number;

  @Expose()
  @Column()
  @Field(() => [WineGrape], { description: '' })
  mostUsedGrapes: WineGrape[];

  constructor(wineCountry: Partial<WineCountry>) {
    if (!wineCountry?.name) return;

    Object.assign(this, plainToClass(WineCountry, wineCountry, { excludeExtraneousValues: true }));
  }
}
