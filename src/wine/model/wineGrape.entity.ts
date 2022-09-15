import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Expose, plainToClass } from 'class-transformer';
import { Column, Entity, ObjectIdColumn } from 'typeorm';

@Entity()
@ObjectType({ description: '와인 포도 품종' })
export class WineGrape {
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
  @Field({ description: '' })
  seoName: string;

  @Expose()
  @Column()
  @Field(() => Int, { description: '' })
  hasDetailedInfo: boolean;

  @Expose()
  @Column()
  @Field(() => Int, { description: '' })
  winesCount: number;

  constructor(wineGrape: Partial<WineGrape>) {
    if (!wineGrape?.name) return;

    Object.assign(this, plainToClass(WineGrape, wineGrape, { excludeExtraneousValues: true }));
  }
}
