import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class VintageStatistics {
  @Field({ description: '' })
  status: string;

  @Field(() => Int, { description: '' })
  ratingsCount: number;

  @Field({ description: '' })
  ratingsAverage: number;

  @Field(() => Int, { description: '' })
  labelsCount: number;

  @Field(() => Int, { description: '' })
  wineRatingsCount: number;

  @Field({ description: '' })
  wineRatingsAverage: number;

  @Field({ description: '' })
  wineStatus: string;
}
