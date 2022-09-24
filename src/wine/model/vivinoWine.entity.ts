import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity } from 'typeorm';
import { Price } from '@/types/price';
import { Vintage } from '@/types/vintage';
import { BaseEntity } from '@/utils/entity';

@Entity({ name: 'vivino_wine' })
@ObjectType({ description: '와인 정보' })
export class VivinoWineEntity extends BaseEntity() {
  @Column()
  @Field(() => Vintage, { description: '와인 빈티지' })
  vintage: Vintage;

  @Column()
  @Field(() => Price, { description: '와인 가격' })
  price: Price;

  constructor(wine: Partial<VivinoWineEntity>) {
    super(VivinoWineEntity, wine);
  }
}
