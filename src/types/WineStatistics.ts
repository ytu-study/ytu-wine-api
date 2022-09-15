import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class WineStatistics {
  @Field({ description: '' })
  status: string;

  @Field(() => Int, { description: '' })
  ratingsCount: number;

  @Field({ description: '' })
  ratingsAverage: number;

  @Field(() => Int, { description: '' })
  labelsCount: number;

  @Field(() => Int, { description: '' })
  vintagesCount: number;
}
