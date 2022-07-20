import { Module } from '@nestjs/common';
import { LogsModule } from './log/logs.module';

@Module({
  imports: [
    LogsModule
  ]
})
export class AppModule {}
