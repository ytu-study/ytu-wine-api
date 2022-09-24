import { ObjectType } from '@nestjs/graphql';
import { Paginated } from '@/utils/paginated';
import { WineGrapeEntity } from '@/wine/model/wineGrape.entity';

@ObjectType()
export class PaginationWineGrape extends Paginated(WineGrapeEntity, '와인 포도 품종') {
}
