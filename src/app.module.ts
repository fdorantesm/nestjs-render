import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ScheduleModule } from '@nestjs/schedule';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksService } from './task.service';

@Module({
  imports: [ScheduleModule.forRoot(), HttpModule],
  controllers: [AppController],
  providers: [AppService, TasksService],
})
export class AppModule {}
