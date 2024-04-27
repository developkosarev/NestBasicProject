import { Command, CommandRunner, Option } from 'nest-commander';

@Command({ name: 'tunnel-ssh', description: 'Tunnel SSH' })
export class TunnelSshCommand extends CommandRunner {
  async run(inputs: string[]): Promise<void> {
    console.log('Tunnel ssh Start')


    console.log('Tunnel ssh End')
  }
}