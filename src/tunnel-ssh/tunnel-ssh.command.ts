import { Command, CommandRunner } from 'nest-commander';
import { TunnelSshService } from './tunnel-ssh.service';

@Command({ name: 'tunnel-ssh', description: 'Tunnel SSH' })
export class TunnelSshCommand extends CommandRunner {
  constructor(private tunnelSshService: TunnelSshService) {
    super();
  }

  async run(): Promise<void> {
    console.log('Tunnel ssh Start')

    console.log(this.tunnelSshService.getShhHost())
    console.log(this.tunnelSshService.getShhUser())

    const result1 = await this.tunnelSshService.runV1()
    console.log(result1)

    //const result2 = await this.tunnelSshService.runV2()
    //result2.dispose();
    //console.log('result2.dispose()');

    //this.tunnelSshService.runV3()

    //await this.tunnelSshService.runV4()

    await this.tunnelSshService.runV5()

    console.log('Tunnel ssh End')
  }
}
