import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class TentacledVariations {
  @Field({ description: '' })
  large: string;

  @Field({ description: '' })
  medium: string;

  @Field({ description: '' })
  small: string;
}
