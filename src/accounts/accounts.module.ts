import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ThrottlerModule } from '@nestjs/throttler';
import { AuthModule } from 'src/auth/auth.module';
import { LobbyMongoDbModule } from 'src/mongo/lobby_mongodb.module';
import { AccountsController } from './accounts.controller';
import { AccountsService } from './accounts.service';

@Module({
  imports: [
    HttpModule,
    LobbyMongoDbModule, 
    AuthModule,
    ThrottlerModule.forRoot({
      ttl: 60,
      limit: 10
    })
  ],
  controllers: [AccountsController],
  providers: [AccountsService]
})
export class AccountsModule {}
