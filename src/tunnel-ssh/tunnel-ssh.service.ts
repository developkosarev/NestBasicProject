import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TunnelSshConfigService } from './tunnel-ssh-config.service';

@Injectable()
export class TunnelSshService {
  constructor(
    private configService: ConfigService,
    private tunnelSshConfigService: TunnelSshConfigService
  ) {}

  getShhHost() {
    //return this.configService.get<string>('DB_HOST');
    return this.tunnelSshConfigService.getShhHost();

    //return 'example.com'
  }
}