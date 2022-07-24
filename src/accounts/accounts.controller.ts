import { Body, Controller, Get, NotFoundException, Param, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from 'src/auth/auth.service';
import { LOCAL_AUTH_GUARD } from 'src/constants';
import { AccountsService } from './accounts.service';

@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService, private authService: AuthService) {}

  @UseGuards(AuthGuard(LOCAL_AUTH_GUARD))
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Get(':displayName')
  async getAccount(@Param('displayName') displayName: string) {
    let account = await this.accountsService.getByDisplayName(displayName);
    if (!account)
      throw new NotFoundException();
    return account;
  }
}
