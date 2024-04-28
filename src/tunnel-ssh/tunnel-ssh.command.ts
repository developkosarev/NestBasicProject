import { Command, CommandRunner, Option } from 'nest-commander';
import { TunnelSshService } from './tunnel-ssh.service';

@Command({ name: 'tunnel-ssh', description: 'Tunnel SSH' })
export class TunnelSshCommand extends CommandRunner {
  constructor(
    private tunnelSshService: TunnelSshService
  ) {
    super();
  }

  async run(inputs: string[]): Promise<void> {
    console.log('Tunnel ssh Start')

    console.log(this.tunnelSshService.getShhHost())

    console.log('Tunnel ssh End')
  }
}