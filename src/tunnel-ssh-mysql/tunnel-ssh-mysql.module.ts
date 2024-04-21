import { Module } from '@nestjs/common';
import { TunnelSshMysqlCommand } from './tunnel-ssh-mysql.command';

@Module({
  providers: [TunnelSshMysqlCommand],
})
export class TunnelSshMysqlModule {}
