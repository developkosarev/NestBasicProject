import { Command, CommandRunner, Option } from 'nest-commander';

//options: {isDefault: true}
@Command({
  name: 'basic',
  arguments: '[task]',
  description: 'A parameter parse',
})
export class CommandTutorial extends CommandRunner {
  constructor() {
    super();
  }

  async run(
    passedParams: string[],
    options?: Record<string, any>,
  ): Promise<void> {
    console.log('CLI Params', passedParams);
    console.log('CLI Options', options);
    return Promise.resolve(undefined);
  }

  @Option({
    flags: '-n, --number [number]',
    description: 'A basic number parser',
  })
  parseNumber(val: string): number {
    return Number(val);
  }

  @Option({
    flags: '-s, --shell <shell>',
    description: 'A different shell to spawn than the default',
  })
  parseShell(val: string) {
    return val;
  }

  @Option({
    flags: '-c, --options <options...>',
    description: 'Specify options',
  })
  parseOptions(option: string, optionsAccumulator: string[] = []): string[] {
    optionsAccumulator.push(option);
    return optionsAccumulator;
  }
}
