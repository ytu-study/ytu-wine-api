import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AryKeyword {
  @Field(() => Int, { description: '' })
  id: number;

  @Field({ description: '' })
  name: string;

  @Field(() => Int, { description: '' })
  count: number;
}
