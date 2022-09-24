import { Type } from '@nestjs/common';
import { Field, ObjectType } from '@nestjs/graphql';
import { Exclude, plainToInstance } from 'class-transformer';
import isEmpty from 'lodash/isEmpty';
import { ObjectIdColumn } from 'typeorm';
import { ObjectIdScalar } from '@/config/graphql/scalars/objectId.scalar';

type IBaseEntity = {
  id?: string;
}

class EmptyClass {
}

export function BaseEntity<T>(classRef?: Type<T>): Type<IBaseEntity> {
  const ClassRef = classRef ?? EmptyClass;

  @ObjectType({ isAbstract: true })
  abstract class BaseEntity extends ClassRef implements IBaseEntity {
    @Exclude()
    @ObjectIdColumn({ name: '_id' })
    @Field(() => ObjectIdScalar, { description: 'objectId' })
    id?: string;

    protected constructor(classRef: Type<T>, entity: Partial<T>) {
      super();
      if (isEmpty(entity)) return;

      Object.assign(this, plainToInstance(classRef, entity));
    }
  }

  return BaseEntity as Type<IBaseEntity>;
}
