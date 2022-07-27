import { Inject, Injectable } from '@nestjs/common';
import { WORLD_MONGODB_PROVIDER } from 'src/constants';

@Injectable()
export class HighscoresService {
  constructor(@Inject(WORLD_MONGODB_PROVIDER) private readonly db: any) {}

  async getOverall(page = 1, limit = 25, gamemode = 'all') {
    const startIndex = (page - 1) * limit;
    let sort = {};
    switch(gamemode) {
      case 'ironman':
        sort = { ironman: true };
      case 'regular':
        sort = { ironman: false };
      default:
        sort = {};
    }
    return await this.db.collection('highscores').find(sort, { projection: { username: 0 } }).sort({ totalLevel: -1, totalXp: -1 }).skip(startIndex).limit(limit).toArray();
  }
}
