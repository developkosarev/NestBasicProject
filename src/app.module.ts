import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CowSayModule } from './cow-say/cow-say.module';
import { S3BucketModule } from './s3-bucket/s3-bucket.module';
import { SayHelloModule } from './sayHello/sayHello.module';
import { PrismaHelloModule } from './prisma-hello/prisma-hello.module';

@Module({
  imports: [S3BucketModule, CowSayModule, SayHelloModule, PrismaHelloModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
