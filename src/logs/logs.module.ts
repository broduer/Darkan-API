import { Module } from '@nestjs/common';
import { MongoDbModule } from 'src/mongo/mongodb.module';
import { LogsController } from './logs.controller';
import { LogsService } from './logs.service';

@Module({
  imports: [MongoDbModule],
  controllers: [LogsController],
  providers: [LogsService],
})
export class LogsModule {}
