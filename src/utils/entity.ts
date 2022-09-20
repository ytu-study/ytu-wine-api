import { Type } from '@nestjs/common';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Exclude, plainToInstance } from 'class-transformer';
import isEmpty from 'lodash/isEmpty';
import { ObjectIdColumn } from 'typeorm';

interface IBaseEntity {
  _id?: string;
}

interface IEntity extends Type<IBaseEntity> {
  description: string;
}

export function BaseEntity(description: string): IEntity {
  @ObjectType({ isAbstract: true })
  class BaseEntity<T> implements IBaseEntity {
    static description = description;

    @Exclude()
    @ObjectIdColumn()
    @Field(() => ID, { description: 'objectId' })
    _id?: string;

    constructor(classRef: Type<T>, entity: Partial<T>) {
      if (isEmpty(entity)) return;

      Object.assign(this, plainToInstance(classRef, entity));
    }
  }

  return BaseEntity;
}
