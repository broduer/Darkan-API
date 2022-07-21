import { Inject, Injectable } from '@nestjs/common';
import { MONGODB_PROVIDER } from 'src/constants';

@Injectable()
export class LogsService {
  constructor(@Inject(MONGODB_PROVIDER) private readonly db: any) {}

  async getErrors(page = 1, limit = 25) {
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    return await this.db.collection('logs').find({ type: 'ERROR' }).skip(startIndex).limit(limit).toArray();
  }

  async getCommands(page = 1, limit = 25) {
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    return await this.db.collection('logs').find({ type: 'COMMAND' }).skip(startIndex).limit(limit).toArray();
  }

  async getGE(page = 1, limit = 25) {
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    return await this.db.collection('logs').find({ type: 'GE' }).skip(startIndex).limit(limit).toArray();
  }
}
