import { Controller, Get, Logger } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    Logger.log('Hello', AppController.name);
    return this.appService.getHello();
  }
}
