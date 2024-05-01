import { Command, CommandRunner } from 'nest-commander';
import { FileUploadService } from './file-upload.service';

@Command({
  name: 's3-bucket',
  arguments: '<task>',
  description: 'Create and remove file on s3 bucket',
})
export class S3BucketCommand extends CommandRunner {
  constructor(private fileUploadService: FileUploadService) {
    super();
  }

  async run(inputs: string[]): Promise<void> {
    console.log('Create file')
    console.log(inputs)
    
    const task = inputs[0]
    switch (task) {
      case 'list':
        await this.fileUploadService.list();
        break;
      case 'put':
        await this.fileUploadService.put();
        break;
      case 'delete':
        await this.fileUploadService.delete();
        break;
      default:
        console.log(`Sorry, we are out of ${task}.`);
    }

    //await this.fileUploadService.put();
    //await this.fileUploadService.list();
    //await this.fileUploadService.delete();

    return Promise.resolve(undefined);
  }
}
