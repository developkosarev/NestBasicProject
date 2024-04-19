import { Module } from '@nestjs/common';
import { CommandTutorial } from './s3-bucket.command';

@Module({
  providers: [CommandTutorial],
})
export class S3BucketModule {}
