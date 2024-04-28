import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TunnelSshCommand } from './tunnel-ssh.command';
import { TunnelSshService } from './tunnel-ssh.service';
import { TunnelSshConfigService } from './tunnel-ssh-config.service';

@Module({
  providers: [TunnelSshCommand, TunnelSshService, TunnelSshConfigService],
  imports: [ConfigModule]
})
export class TunnelSshModule {}
