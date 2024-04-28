import { Injectable } from '@nestjs/common';
import { SshConfigService } from './config/ssh.config';

@Injectable()
export class TunnelSshService {
  constructor(private sshConfigService: SshConfigService) {}

  getShhHost() {
    return this.sshConfigService.getHost();
  }
  getShhUser() {
    return this.sshConfigService.getUser();
  }
}
