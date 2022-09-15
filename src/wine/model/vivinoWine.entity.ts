import { Field, ObjectType } from '@nestjs/graphql';
import { Expose, plainToClass } from 'class-transformer';
import { Column, Entity, ObjectIdColumn } from 'typeorm';
import { Vintage } from '@/types/vintage';
import { Price } from '@/types/price';

@Entity()
@ObjectType({ description: '와인 정보' })
export class VivinoWine {
  @Expose()
  @ObjectIdColumn()
  @Field({ description: 'objectId' })
  _id?: string;

  @Expose()
  @Column()
  @Field(() => Vintage, { description: '' })
  vintage: Vintage;

  @Expose()
  @Column()
  @Field(() => Price, { description: '' })
  price: Price;

  constructor(wine: Partial<VivinoWine>) {
    if (!wine?.vintage?.name) return;

    Object.assign(this, plainToClass(VivinoWine, wine, { excludeExtraneousValues: true }));
  }
}
