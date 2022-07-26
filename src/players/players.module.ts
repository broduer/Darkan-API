import { Module } from '@nestjs/common';
import { LobbyMongoDbModule } from 'src/mongo/lobby_mongodb.module';
import { WorldMongoDbModule } from 'src/mongo/world_mongodb.module';
import { PlayersController } from './players.controller';
import { PlayersService } from './players.service';

@Module({
  imports: [WorldMongoDbModule, LobbyMongoDbModule],
  controllers: [PlayersController],
  providers: [PlayersService],
})
export class PlayersModule {}
