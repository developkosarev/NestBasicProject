import { Command, CommandRunner } from 'nest-commander';

@Command({ 
    name: 'cowsay', options: {isDefault: true}
})
export class CowSayCommand extends CommandRunner {
  async run(): Promise<void> {
    console.log('Hello World!');
  }
}