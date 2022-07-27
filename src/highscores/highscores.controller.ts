import { Controller, Get, Query } from '@nestjs/common';
import { HighscoresService } from './highscores.service';

@Controller('highscores')
export class HighscoresController {
  constructor(private readonly highscoresService: HighscoresService) {}

  @Get()
  async getOverall(@Query('page') page = 1, @Query('limit') limit = 25, @Query('gamemode') gamemode = 'all') {
    return await this.highscoresService.getOverall(page, limit, gamemode);
  }
}
