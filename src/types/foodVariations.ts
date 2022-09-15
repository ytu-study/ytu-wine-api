import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class FoodVariations {
  @Field({ description: '' })
  small: string;
}
