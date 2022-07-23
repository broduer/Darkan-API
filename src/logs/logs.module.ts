import { Module } from '@nestjs/common';
import { WorldMongoDbModule } from 'src/mongo/world_mongodb.module';
import { LogsController } from './logs.controller';
import { LogsService } from './logs.service';

@Module({
  imports: [WorldMongoDbModule],
  controllers: [LogsController],
  providers: [LogsService],
})
export class LogsModule {}
