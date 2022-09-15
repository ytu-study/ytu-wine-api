import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class FlavorStats {
  @Field(() => Int, { description: '' })
  count: number;

  @Field(() => Int, { description: '' })
  score: number;
}
