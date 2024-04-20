import { Module } from '@nestjs/common';
import { SayHelloCommand } from './sayHello.command';

@Module({
  providers: [SayHelloCommand],
})
export class SayHelloModule {}
