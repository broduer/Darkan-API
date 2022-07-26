import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { WORLD_MONGODB_PROVIDER, LOBBY_MONGODB_PROVIDER } from 'src/constants';

@Injectable()
export class PlayersService {
  constructor(@Inject(WORLD_MONGODB_PROVIDER) private readonly worldDb: any, @Inject(LOBBY_MONGODB_PROVIDER) private readonly lobbyDb: any) {}

  async getPlayer(displayName: string) {
    let account = await this.lobbyDb.collection('accounts').findOne({ displayName: displayName }, { projection: {
      username: 1
    }});
    if (!account)
      throw new NotFoundException('Account not found.');
    let player = await this.worldDb.collection('players').findOne({ username: account.username }, { projection: {
      inventory: 1,
      bank: 1,
      skills: 1,
      npcKills: 1,
      variousCounter: 1,
      timePlayed: 1,
    } });
    if (!player)
      throw new NotFoundException('Player not found.');
    return player;
  }
}
