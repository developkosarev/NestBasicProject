import { Module } from '@nestjs/common';
/* Config */
import { ConfigModule } from '@nestjs/config';
import { S3BucketConfig } from './config/s3-bucket.config';
/* Command */
import { FileUploadService } from './file-upload.service';
import { S3BucketCommand } from './s3-bucket.command';

@Module({
  providers: [S3BucketConfig, FileUploadService, S3BucketCommand],
  imports: [ConfigModule],
})
export class S3BucketModule {}
