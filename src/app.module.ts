import { Module } from '@nestjs/common';
import { AccountsModule } from './accounts/accounts.module';
import { LogsModule } from './logs/logs.module';

@Module({
  imports: [
    AccountsModule,
    LogsModule
  ]
})
export class AppModule {}
