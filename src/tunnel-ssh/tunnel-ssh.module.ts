import { Module } from '@nestjs/common';
import { TunnelSshCommand } from './tunnel-ssh.command';

@Module({
  providers: [TunnelSshCommand],
})
export class TunnelSshModule {}
