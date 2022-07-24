import { Module } from '@nestjs/common';
import { AccountsModule } from './accounts/accounts.module';
import { LogsModule } from './logs/logs.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    AccountsModule,
    LogsModule,
    AuthModule
  ]
})
export class AppModule {}
