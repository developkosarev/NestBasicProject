import { Command, CommandRunner } from 'nest-commander';
import { FileUploadService } from './file-upload.service';

@Command({
  name: 's3-bucket',
  description: 'Create and remove file on s3 bucket',
})
export class S3BucketCommand extends CommandRunner {
  constructor(private fileUploadService: FileUploadService) {
    super();
  }

  async run(): Promise<void> {
    console.log('Create file')

    await this.fileUploadService.ls();

    return Promise.resolve(undefined);
  }
}
