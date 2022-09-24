import { ObjectType } from '@nestjs/graphql';
import { Paginated } from '@/utils/paginated';
import { WineCountryEntity } from '@/wine/model/wineCountry.entity';

@ObjectType()
export class PaginatedWineCountry extends Paginated(WineCountryEntity, '와인 국가') {
}
