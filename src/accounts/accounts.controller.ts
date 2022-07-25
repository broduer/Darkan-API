import { Body, Controller, Get, NotFoundException, Param, Post, Request, UseGuards } from '@nestjs/common';
import { SkipThrottle } from '@nestjs/throttler';
import { AuthService } from 'src/auth/auth.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { AccountsService } from './accounts.service';
import { CreateAccountDto } from './dto/create-account';

@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService, private authService: AuthService) {}

  @Post('create')
  async create(@Body() account : CreateAccountDto) {
    return this.accountsService.create(account);
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @SkipThrottle()
  @UseGuards(JwtAuthGuard)
  @Get()
  async getValidatedUser(@Request() req) {
    return req.user;
  }

  @SkipThrottle()
  @Get(':displayName')
  async getAccount(@Param('displayName') displayName: string) {
    let account = await this.accountsService.getByDisplayName(displayName);
    if (!account)
      throw new NotFoundException();
    return account;
  }
}
