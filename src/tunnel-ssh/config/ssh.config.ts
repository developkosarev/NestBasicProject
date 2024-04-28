import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class SshConfigService {
  constructor(private configService: ConfigService) {}

  getHost() {
    return this.configService.get<string>('SSH_HOST');
  }
  getUser() {
    return this.configService.get<string>('SSH_USER');
  }
  getPrivateKey() {
    return this.configService.get<string>('SSH_PRIVATE_KEY');
  }
  getPrivateKeyPpk() {
    return this.configService.get<string>('SSH_PRIVATE_KEY_PPK');
  }
}
