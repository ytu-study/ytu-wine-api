import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class PurpleVariations {
  @Field({ description: '' })
  large: string;

  @Field({ description: '' })
  medium: string;
}
