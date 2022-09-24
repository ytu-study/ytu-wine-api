import { ObjectType } from '@nestjs/graphql';
import { Paginated } from '@/utils/paginated';
import { WineTypeEntity } from './wineType.entity';

@ObjectType()
export class PaginatedWineType extends Paginated(WineTypeEntity, '와인 타입') {
}
