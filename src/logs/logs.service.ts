import { Inject, Injectable } from '@nestjs/common';
import { MONGODB_PROVIDER } from 'src/constants';

@Injectable()
export class LogsService {
  constructor(@Inject(MONGODB_PROVIDER) private readonly db: any) {}

  async getLogs(page = 1, limit = 25, type: string) {
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    return await this.db.collection('logs').find({ type }).skip(startIndex).limit(limit).toArray();
  }
}
