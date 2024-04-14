import { Module } from '@nestjs/common';
import { S3BucketCommand } from './s3-bucket.command';

@Module({
  providers: [S3BucketCommand],
})
export class S3BucketModule {}
