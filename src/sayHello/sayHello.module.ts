import { Module } from '@nestjs/common';
import { SayHelloCommand } from './SayHello.command';

@Module({
  providers: [SayHelloCommand],
})
export class SayHelloModule {}
