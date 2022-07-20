import { Inject, Injectable } from '@nestjs/common';
import { MONGODB_PROVIDER } from '../constants';

@Injectable()
export class LogsService {
  constructor(@Inject(MONGODB_PROVIDER) private readonly db: any) {}

  getHello(): string {
    return 'Hello World!';
  }
}
