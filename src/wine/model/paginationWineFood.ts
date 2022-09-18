import { ObjectType } from '@nestjs/graphql';
import { Paginated } from '@/utils/paginated';
import { WineFood } from '@/wine/model/wineFood.entity';

@ObjectType()
export class PaginationWineFood extends Paginated(WineFood) {
}
