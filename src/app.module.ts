import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FirstModule } from './first/first.module';
import { SecondController } from './second/second.controller';

@Module({
  imports: [FirstModule],
  controllers: [AppController, SecondController],
  providers: [AppService],
})
export class AppModule {}
