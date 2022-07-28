import { Inject, Injectable } from '@nestjs/common';
import { WORLD_MONGODB_PROVIDER } from 'src/constants';

@Injectable()
export class LogsService {
  constructor(@Inject(WORLD_MONGODB_PROVIDER) private readonly db: any) {}

  async getLogs(page = 1, limit = 25, type: string) {
    page = Number(page);
    limit = Number(limit);
    const startIndex = (page - 1) * limit;
    return await this.db.collection('logs').find({ type }).skip(startIndex).limit(limit).toArray();
  }
}
