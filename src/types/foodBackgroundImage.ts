import { Field, ObjectType } from '@nestjs/graphql';
import { FoodVariations } from '@/types/foodVariations';

@ObjectType()
export class FoodBackgroundImage {
  @Field({ deprecationReason: 'deprecated' })
  location: string;

  @Field(() => FoodVariations, { description: '' })
  variations: FoodVariations;
}
