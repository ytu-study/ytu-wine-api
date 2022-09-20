import { ArgsType, Field } from '@nestjs/graphql';
import { ObjectIdScalar } from '@/config/graphql/scalars/objectId.scalar';

@ArgsType()
export class ObjectIdArgs {
  @Field(() => ObjectIdScalar)
  id: string;
}
