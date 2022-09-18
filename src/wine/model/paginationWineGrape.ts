import { ObjectType } from '@nestjs/graphql';
import { Paginated } from '@/utils/paginated';
import { WineGrape } from '@/wine/model/wineGrape.entity';

@ObjectType()
export class PaginationWineGrape extends Paginated(WineGrape) {
}
