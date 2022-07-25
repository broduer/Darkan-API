import { HttpService } from '@nestjs/axios';
import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { LOBBY_MONGODB_PROVIDER } from 'src/constants';
import { CreateAccountDto } from './dto/create-account';
import * as config from '../../config';

@Injectable()
export class AccountsService {
  constructor(private readonly httpService: HttpService, @Inject(LOBBY_MONGODB_PROVIDER) private readonly db: any) {}

  async getByUserOrEmail(usernameOrEmail: string) {
    return await this.db.collection('accounts').findOne({ $or: [ { username: usernameOrEmail }, { email: usernameOrEmail } ] });
  }

  async getByDisplayName(displayName: string) {
    return await this.db.collection('accounts').findOne({ displayName: displayName }, { projection: {
      displayName: 1,
      rights: 1
    }});
  }

  async create(account: CreateAccountDto) {
    try {
      let response = await this.httpService.axiosRef.post(config.LOBBY_API_URI + 'createaccount', account);
      delete response.data.password;
      delete response.data.prevPasswords;
      return response.data;
    } catch(e) {
      throw new BadRequestException(e.response.data.error);
    }
  }
}
