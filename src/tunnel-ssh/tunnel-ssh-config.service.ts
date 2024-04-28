import { Injectable } from '@nestjs/common';

@Injectable()
export class TunnelSshConfigService {
  constructor() {}

  getShhHost() {
    return 'example.com'

    //return this.configService.get('DB_HOST')
  }
}