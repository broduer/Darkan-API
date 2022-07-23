import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { AccountsService } from './accounts.service';

@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}

  @Get(':displayName')
  async getAccount(@Param('displayName') displayName: string) {
    let account = await this.accountsService.getByDisplayName(displayName);
    if (!account)
      throw new NotFoundException();
    return account;
  }
}
