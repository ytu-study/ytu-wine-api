import { ObjectType } from '@nestjs/graphql';
import { Paginated } from '@/utils/paginated';
import { WineType } from './wineType.entity';

@ObjectType()
export class PaginatedWineType extends Paginated(WineType) {
}
