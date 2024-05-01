import { Module } from '@nestjs/common';
import { CommandTutorial } from './command-tutorial.command';

@Module({
  providers: [CommandTutorial],
})
export class CommandTutorialModule {}
