import { Field, ObjectType } from '@nestjs/graphql';
import { FoodVariations } from '@/types/FoodVariations';

@ObjectType()
export class FoodBackgroundImage {
  @Field({ description: '' })
  location: string;

  @Field(() => FoodVariations, { description: '' })
  variations: FoodVariations;
}
