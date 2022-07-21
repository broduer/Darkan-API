import { Controller, Get, Query } from '@nestjs/common';
import { LogsService } from './logs.service';

@Controller('logs')
export class LogsController {
  constructor(private readonly logsService: LogsService) {}

  @Get('errors')
  async getErrors(@Query('page') page = 1, @Query('limit') limit = 25) {
    return await this.logsService.getErrors(page, limit);
  }
}
