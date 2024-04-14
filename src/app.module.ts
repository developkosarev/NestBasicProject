import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CowSayModule } from './cow-say/cow-say.module';

@Module({
  imports: [CowSayModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
