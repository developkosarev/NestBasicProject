import { Command, CommandRunner } from 'nest-commander';

//options: {isDefault: true}
@Command({ name: 'cowsay', arguments: '[task]', description: 'CowSay' })
export class CowSayCommand extends CommandRunner {
  async run(): Promise<void> {
    console.log('Hello World v1 !');
  }
}