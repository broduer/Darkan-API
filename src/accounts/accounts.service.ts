import { Inject, Injectable } from '@nestjs/common';
import { LOBBY_MONGODB_PROVIDER } from 'src/constants';

@Injectable()
export class AccountsService {
  constructor(@Inject(LOBBY_MONGODB_PROVIDER) private readonly db: any) {}

  async getByUserOrEmail(usernameOrEmail: string) {
    return await this.db.collection('accounts').findOne({ $or: [ { username: usernameOrEmail }, { email: usernameOrEmail } ] }, { projection: {
      username: 1,
      email: 1,
      displayName: 1,
      rights: 1
    }});
  }

  async getByDisplayName(displayName: string) {
    return await this.db.collection('accounts').findOne({ displayName: displayName }, { projection: {
      displayName: 1,
      rights: 1
    }});
  }
}
