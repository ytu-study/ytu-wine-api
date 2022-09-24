import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class TopList {
  @Field(() => Int)
  id: number;

  @Field()
  location: string;

  @Field()
  name: string;

  @Field()
  seoName: string;

  @Field(() => Int)
  type: number;

  @Field()
  year: string;
}
