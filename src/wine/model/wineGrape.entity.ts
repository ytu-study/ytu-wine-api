import { Field, Int, ObjectType, OmitType } from '@nestjs/graphql';
import { Column, Entity } from 'typeorm';
import { WineGrape } from '@/types/wineGrape';
import { BaseEntity } from '@/utils/entity';

@Entity({ name: 'wine_grape' })
@ObjectType({ description: '와인 포도 품종' })
export class WineGrapeEntity extends BaseEntity(OmitType(WineGrape, ['id'])) implements Omit<WineGrape, 'id'> {
  @Column({ name: 'id' })
  @Field(() => Int, { description: '포도 ID' })
  grapeId: number;

  @Column()
  name:string;

  @Column()
  hasDetailedInfo: boolean;

  @Column()
  seoName: string;

  @Column()
  winesCount: number;

  constructor(data: WineGrapeEntity) {
    super(WineGrapeEntity, data);
  }
}
