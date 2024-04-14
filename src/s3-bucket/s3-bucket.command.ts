import { Command, CommandRunner } from 'nest-commander';

@Command({ 
    name: 's3bucket', options: {isDefault: true}
})
export class S3BucketCommand extends CommandRunner {
  async run(): Promise<void> {
    console.log('Create file!');
  }
}