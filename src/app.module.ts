import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommandTutorialModule } from './command-tutorial/command-tutorial.module';
import { SayHelloModule } from './sayHello/sayHello.module';
import { PrismaHelloModule } from './prisma-hello/prisma-hello.module';
import { TunnelSshMysqlModule } from './tunnel-ssh-mysql/tunnel-ssh-mysql.module';
import { TunnelSshModule } from './tunnel-ssh/tunnel-ssh.module';
import { S3BucketModule } from './s3-bucket/s3-bucket.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    CommandTutorialModule,
    SayHelloModule,
    PrismaHelloModule,
    TunnelSshMysqlModule,
    TunnelSshModule,
    S3BucketModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
