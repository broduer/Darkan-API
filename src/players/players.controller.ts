import { Controller, Get, Param, Query } from '@nestjs/common';
import { PlayersService } from './players.service';

@Controller('players')
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}

  @Get('online-count')
  async getPlayersOnline() {
    return await this.playersService.getPlayersOnline();
  }

  @Get(':username')
  async getPlayerByUsername(@Param('username') username: string) {
    return await this.playersService.getPlayer(username);
  }
}
