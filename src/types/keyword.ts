import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: '키워드 정보' })
export class Keyword {
  @Field(() => Int, { description: '키워드 ID' })
  id: number;

  @Field({ description: '키워드 이름' })
  name: string;

  @Field(() => Int, { description: '키워드 수' })
  count: number;
}
