import { Type } from '@nestjs/common';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Exclude, plainToInstance } from 'class-transformer';
import isEmpty from 'lodash/isEmpty';
import { ObjectIdColumn } from 'typeorm';

type IBaseEntity = {
  id?: string;
}

class EmptyClass {
}

export function BaseEntity<T>(classRef?: Type<T>): Type<IBaseEntity> & Type<T> {
  const ClassRef = classRef ?? EmptyClass;

  @ObjectType({ isAbstract: true })
  abstract class BaseEntity extends ClassRef implements IBaseEntity {
    @Exclude()
    @ObjectIdColumn({ name: '_id' })
    @Field(() => ID, { description: 'objectId' })
    id?: string;

    protected constructor(classRef: Type<T>, entity: Partial<T>) {
      super();
      if (isEmpty(entity)) return;

      Object.assign(this, plainToInstance(classRef, entity));
    }
  }

  return BaseEntity as Type<IBaseEntity> & Type<T>;
}
