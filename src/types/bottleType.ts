import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class BottleType {
  @Field(() => Int, { description: '' })
  id: number;

  @Field({ description: '' })
  name: string;

  @Field({ description: '' })
  shortName: string;

  @Field({ description: '' })
  shortNamePlural: string;

  @Field(() => Int, { description: '' })
  volumeMl: number;
}
