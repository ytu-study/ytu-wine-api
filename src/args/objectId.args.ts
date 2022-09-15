import { ArgsType, Field, ID } from '@nestjs/graphql';

@ArgsType()
export class ObjectIdArgs {
  @Field(() => ID)
  id: string;
}
