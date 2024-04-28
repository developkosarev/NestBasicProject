import { Module } from '@nestjs/common';
import { PrismaHelloCommand } from './prisma-hello.command';

@Module({
  providers: [PrismaHelloCommand],
})
export class PrismaHelloModule {}
