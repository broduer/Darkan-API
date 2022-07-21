import { Controller, Get, Query } from '@nestjs/common';
import { LogsService } from './logs.service';

@Controller('logs')
export class LogsController {
  constructor(private readonly logsService: LogsService) {}

  @Get('errors')
  async getErrors(@Query('page') page = 1, @Query('limit') limit = 25) {
    return await this.logsService.getLogs(page, limit, 'ERROR');
  }

  @Get('commands')
  async getCommands(@Query('page') page = 1, @Query('limit') limit = 25) {
    return await this.logsService.getLogs(page, limit, 'COMMAND');
  }

  @Get('ge')
  async getGE(@Query('page') page = 1, @Query('limit') limit = 25) {
    return await this.logsService.getLogs(page, limit, 'GE');
  }

  @Get('graves')
  async getGraves(@Query('page') page = 1, @Query('limit') limit = 25) {
    return await this.logsService.getLogs(page, limit, 'GRAVE');
  }

  @Get('pickups')
  async getPickups(@Query('page') page = 1, @Query('limit') limit = 25) {
    return await this.logsService.getLogs(page, limit, 'PICKUP');
  }

  @Get('reports')
  async getReports(@Query('page') page = 1, @Query('limit') limit = 25) {
    return await this.logsService.getLogs(page, limit, 'REPORT');
  }

  @Get('trades')
  async getTrades(@Query('page') page = 1, @Query('limit') limit = 25) {
    return await this.logsService.getLogs(page, limit, 'TRADE');
  }
}
