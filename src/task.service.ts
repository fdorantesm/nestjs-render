import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class TasksService {
  private readonly logger = new Logger(TasksService.name);

  constructor(private readonly httpService: HttpService) {}

  @Cron(CronExpression.EVERY_MINUTE)
  public async handleCron() {
    await this.httpService.get('https://nestjs-render.onrender.com');
    this.logger.debug('Wake up');
  }
}
