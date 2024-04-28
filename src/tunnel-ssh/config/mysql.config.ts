import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MysqlConfigService {
  constructor(private configService: ConfigService) {}

  getHost(): string {
    return this.configService.get<string>('DB_HOST')
  }
  getUser(): string {
    return this.configService.get<string>('DB_USER')
  }
  getPassword() {
    return this.configService.get<string>('DB_PASSWORD')
  }
  getDb() {
    return this.configService.get<string>('DB_DATABASE')
  }
}
