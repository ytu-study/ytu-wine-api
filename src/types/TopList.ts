import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class TopList {
  @Field(() => Int, { description: '' })
  id: number;

  @Field({ description: '' })
  location: string;

  @Field({ description: '' })
  name: string;

  @Field({ description: '' })
  seoName: string;

  @Field(() => Int, { description: '' })
  type: number;

  @Field({ description: '' })
  year: string;
}
