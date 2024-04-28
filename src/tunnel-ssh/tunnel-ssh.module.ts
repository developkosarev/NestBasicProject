import { Module } from '@nestjs/common';
/* Config */
import { ConfigModule } from '@nestjs/config';
import { SshConfigService } from './config/ssh.config';
/* Command */
import { TunnelSshCommand } from './tunnel-ssh.command';
import { TunnelSshService } from './tunnel-ssh.service';

@Module({
  providers: [SshConfigService, TunnelSshCommand, TunnelSshService],
  imports: [ConfigModule]
})
export class TunnelSshModule {}
