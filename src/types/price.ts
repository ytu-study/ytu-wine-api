import { Field, Int, ObjectType } from '@nestjs/graphql';
import { BottleType } from '@/types/bottleType';
import { Currency } from '@/types/currency';

@ObjectType()
export class Price {
  @Field(() => Int, { description: '가격 ID' })
  id: number;

  @Field({ description: '' })
  type: string;

  @Field({ description: '' })
  sku: string;

  @Field({ description: '' })
  url: string;

  @Field(() => Int, { description: '' })
  visibility: number;

  @Field(() => Int, { description: '' })
  bottleTypeId: number;

  @Field(() => Currency, { description: '통화' })
  currency: Currency;

  @Field(() => BottleType, { description: '병 유형' })
  bottleType: BottleType;

  @Field({ description: '가격' })
  amount: number;
}
