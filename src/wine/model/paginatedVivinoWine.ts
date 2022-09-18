import { ObjectType } from '@nestjs/graphql';
import { Paginated } from '@/utils/paginated';
import { VivinoWine } from '@/wine/model/vivinoWine.entity';

@ObjectType()
export class PaginatedVivinoWine extends Paginated(VivinoWine) {
}
