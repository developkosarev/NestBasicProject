import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CowSayModule } from './cow-say/cow-say.module';
import { S3BucketModule } from './s3-bucket/s3-bucket.module';
import { SayHelloModule } from './sayHello/sayHello.module';
import { PrismaHelloModule } from './prisma-hello/prisma-hello.module';
import { TunnelSshMysqlModule } from './tunnel-ssh-mysql/tunnel-ssh-mysql.module';
import { TunnelSshModule } from './tunnel-ssh/tunnel-ssh.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    S3BucketModule,
    CowSayModule,
    SayHelloModule,
    PrismaHelloModule,
    TunnelSshMysqlModule,
    TunnelSshModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
