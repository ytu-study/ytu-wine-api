import { ObjectType } from '@nestjs/graphql';
import { Column, Entity } from 'typeorm';
import { WineGrape } from '@/types/wineGrape';
import { BaseEntity } from '@/utils/entity';

@Entity({ name: 'wine_grape' })
@ObjectType({ description: '와인 포도 품종' })
export class WineGrapeEntity extends BaseEntity(WineGrape) {
  @Column({ name: 'id' })
  grapeId: number;

  constructor(data: WineGrapeEntity) {
    super(WineGrapeEntity, data);
  }
}
