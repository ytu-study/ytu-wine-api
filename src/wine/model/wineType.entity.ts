import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Expose, plainToClass } from 'class-transformer';
import { Column, Entity, ObjectIdColumn } from 'typeorm';

@Entity()
@ObjectType({ description: '와인 타입' })
export class WineType {
  @Expose()
  @ObjectIdColumn()
  @Field({ description: 'objectId' })
  _id?: string;

  @Expose()
  @Column()
  @Field(() => Int, { description: '' })
  id: number;

  @Expose()
  @Column()
  @Field({ description: '' })
  name: string;

  @Expose()
  @Column()
  @Field(() => Int, { description: '' })
  winesCount: number;

  constructor(wineType: Partial<WineType>) {
    if (!wineType?.name) return;

    Object.assign(this, plainToClass(WineType, wineType, { excludeExtraneousValues: true }));
  }
}
