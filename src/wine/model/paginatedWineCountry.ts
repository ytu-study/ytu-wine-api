import { ObjectType } from '@nestjs/graphql';
import { Paginated } from '@/utils/paginated';
import { WineCountry } from '@/wine/model/wineCountry.entity';

@ObjectType()
export class PaginatedWineCountry extends Paginated(WineCountry) {
}
