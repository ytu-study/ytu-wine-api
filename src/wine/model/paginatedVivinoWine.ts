import { ObjectType } from '@nestjs/graphql';
import { Paginated } from '@/utils/paginated';
import { VivinoWineEntity } from '@/wine/model/vivinoWine.entity';

@ObjectType()
export class PaginatedVivinoWine extends Paginated(VivinoWineEntity, '와인 정보') {
}
