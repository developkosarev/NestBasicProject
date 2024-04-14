import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CowSayModule } from './cow-say/cow-say.module';
import { S3BucketModule } from './s3-bucket/s3-bucket.module';

@Module({
  imports: [CowSayModule, S3BucketModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
