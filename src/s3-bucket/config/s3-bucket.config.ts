import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class S3BucketConfig {
  constructor(private configService: ConfigService) {}

  getRegion(): string {
    return this.configService.get<string>('S3_REGION')
  }
  getBucket(): string {
    return this.configService.get<string>('S3_BUCKET')
  }
  getAccessKey() {
    return this.configService.get<string>('S3_ACCESS_KEY')
  }
  getSecretKey() {
    return this.configService.get<string>('S3_SECRET_KEY')
  }
}