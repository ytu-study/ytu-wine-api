import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Currency } from '@/types/currency';
import { WineGrape } from '@/types/wineGrape';

@ObjectType({ description: '와인 국가' })
export class WineCountry {
  @Field({ description: '국가 코드' })
  code: string;

  @Field({ description: '국가 이름' })
  name: string;

  @Field({ description: '국가 이름(국가 언어)' })
  nativeName: string;

  @Field({ description: '국가 이름(kebab-case)' })
  seoName: string;

  @Field(() => Currency, { description: '통화' })
  currency: Currency;

  @Field(() => Int, { description: '국가 조회수' })
  regionsCount: number;

  @Field(() => Int, { description: '' })
  usersCount: number;

  @Field(() => Int, { description: '' })
  winesCount: number;

  @Field(() => Int, { description: '' })
  wineriesCount: number;

  @Field(() => [WineGrape], { description: '가장 많이 사용하는 포도 품종' })
  mostUsedGrapes: WineGrape[];
}
