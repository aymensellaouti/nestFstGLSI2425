import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor() {}

  @Get('igl4')
  getHello(): string {
    return 'IGL 4';
  }
}
