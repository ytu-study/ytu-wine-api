import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class FluffyVariations {
  @Field({ description: '' })
  small: string;
}
