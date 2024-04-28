import { Module } from '@nestjs/common';
/* Config */
import { ConfigModule } from '@nestjs/config';
import { SshConfigService } from './config/ssh.config';
import { MysqlConfigService } from './config/mysql.config';
/* Command */
import { TunnelSshService } from './tunnel-ssh.service';
import { MysqlSshService } from './mysql-ssh.service';
import { TunnelSshCommand } from './tunnel-ssh.command';

@Module({
  providers: [SshConfigService, MysqlConfigService, TunnelSshService, MysqlSshService, TunnelSshCommand],
  imports: [ConfigModule],
})
export class TunnelSshModule {}
