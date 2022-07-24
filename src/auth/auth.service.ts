import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Crypt } from 'src/crypt';
import { AccountsService } from '../accounts/accounts.service';

@Injectable()
export class AuthService {
  constructor(
    private accountsService: AccountsService,
    private jwtService: JwtService
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.accountsService.getByUserOrEmail(username);
    if (user && JSON.stringify(user.password) == JSON.stringify(Crypt.encrypt(pass))) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}