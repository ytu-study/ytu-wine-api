import { Field, Int, ObjectType } from '@nestjs/graphql';
import { BottleType } from '@/types/BottleType';
import { Currency } from '@/types/Currency';

@ObjectType()
export class Price {
  @Field(() => Int, { description: '' })
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

  @Field(() => Currency, { description: '' })
  currency: Currency;

  @Field(() => BottleType, { description: '' })
  bottleType: BottleType;

  @Field({ description: '' })
  amount: number;
}
