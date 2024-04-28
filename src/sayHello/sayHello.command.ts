import { Command, CommandRunner, Option } from 'nest-commander';

interface BasicCommandOptions {
  name?: string;
  age?: number;
}

@Command({ name: 'sayhello', description: 'Say hello' })
export class SayHelloCommand extends CommandRunner {
  async run(inputs: string[], options?: BasicCommandOptions): Promise<void> {
    console.log('Inputs:', inputs);
    console.log('Options:', options);
    console.log(`Options age: ${options.age}`);
    console.log(`Name ${options.name}, Age ${options.age}`);

    //if (options.age < 13) {
    //  console.log(`Hello ${options.name}, you're still rather young!`);
    //} else if (12 < options.age && options.age < 50) {
    //  console.log(`Hello ${options.name}, you're in the prime of your life!`);
    //} else {
    //  console.log(`Hello ${options.name}, getting up there in age, huh? Well, you're only as young as you feel!`);
    //}
  }

  @Option({
    flags: '-n, --name [name]',
    name: 'name',
    description: 'String return',
  })
  parseName(val: string) {
    return val;
  }

  @Option({
    flags: '-a, --age [age]',
    name: 'age',
    description: 'Basic number parser',
  })
  parseAge(val: string): number {
    return Number.parseInt(val, 10);
  }
}
