import { Injectable } from '@nestjs/common';
import { SshConfigService } from './config/ssh.config';
import { NodeSSH } from 'node-ssh';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class TunnelSshService {
  constructor(private sshConfigService: SshConfigService) {}

  getShhHost() {
    return this.sshConfigService.getHost();
  }
  getShhUser() {
    return this.sshConfigService.getUser();
  }

  runV1(): Promise<string> {
    return new Promise(function(resolve, reject) {
      setTimeout(() => {
        console.log('7. Resolve mock');
        resolve("result");
      }, 1000);

    })
  }

  runV2(): Promise<NodeSSH> {
    const ssh = new NodeSSH()

    return ssh.connect({
      host: this.sshConfigService.getHost(),
      username: this.sshConfigService.getUser(),
      privateKeyPath: this.sshConfigService.getPrivateKet()
    })
  }

  runV3() {
    const ssh = new NodeSSH()

    return ssh.connect({
      host: this.sshConfigService.getHost(),
      username: this.sshConfigService.getUser(),
      privateKeyPath: this.sshConfigService.getPrivateKet()
    })
    .then(function() {
      // Command
      ssh.execCommand('pwd')
      .then(function(result) {
        console.log('STDOUT: ' + result.stdout)
        console.log('STDERR: ' + result.stderr)

        return ssh;
      }).then(ssh => {
        ssh.dispose()
      })
    })
  }

  async runV4(): Promise<void> {
    const prisma = new PrismaClient();
    const result = await prisma.$queryRaw`SELECT * FROM store_website`;
    console.log(result);
  }

}
