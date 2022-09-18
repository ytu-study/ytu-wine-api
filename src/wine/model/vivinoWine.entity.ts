import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity } from 'typeorm';
import { Price } from '@/types/price';
import { Vintage } from '@/types/vintage';
import { BaseEntity } from '@/utils/entity';

const description = '와인 정보';

@Entity()
@ObjectType({ description })
export class VivinoWine extends BaseEntity(description) {
  @Column()
  @Field(() => Vintage, { description: '' })
  vintage: Vintage;

  @Column()
  @Field(() => Price, { description: '' })
  price: Price;

  constructor(wine: Partial<VivinoWine>) {
    super(VivinoWine, wine);
  }
}
