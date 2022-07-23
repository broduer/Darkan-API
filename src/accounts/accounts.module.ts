import { Module } from '@nestjs/common';
import { LobbyMongoDbModule } from 'src/mongo/lobby_mongodb.module';
import { AccountsController } from './accounts.controller';
import { AccountsService } from './accounts.service';

@Module({
  imports: [LobbyMongoDbModule],
  controllers: [AccountsController],
  providers: [AccountsService],
})
export class AccountsModule {}
