import { ObjectType } from '@nestjs/graphql';
import { Paginated } from '@/utils/paginated';
import { WineFoodEntity } from '@/wine/model/wineFood.entity';

@ObjectType()
export class PaginationWineFood extends Paginated(WineFoodEntity, '와인과 어울리는 음식') {
}
