import { NestFactory } from '@nestjs/core';
import { CommandFactory } from 'nest-commander';
import { SayHelloModule } from './sayHello/sayHello.module';

async function bootstrap() {  
  await CommandFactory.run(SayHelloModule);
}
bootstrap();
