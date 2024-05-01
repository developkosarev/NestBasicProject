import { Injectable, UploadedFiles } from '@nestjs/common';
import { S3BucketConfig } from './config/s3-bucket.config';
import { S3Client, ListObjectsV2Command } from '@aws-sdk/client-s3';
//import { v4 as uuid } from 'uuid';

@Injectable()
export class FileUploadService {
  constructor(
    private s3BucketConfig: S3BucketConfig,
  ) {}

  async ls() {
    const client = new S3Client({
      region: this.s3BucketConfig.getRegion(),
      credentials: {
        accessKeyId: this.s3BucketConfig.getAccessKey(),
        secretAccessKey: this.s3BucketConfig.getSecretKey(),
      },
    });

    const command = new ListObjectsV2Command({
      Bucket: this.s3BucketConfig.getBucket(),
      // The default and maximum number of keys returned is 1000. This limits it to
      // one for demonstration purposes.
      MaxKeys: 10,
    });

    try {
      let isTruncated = true;

      console.log("Your bucket contains the following objects:\n");
      let contents = "";

      while (isTruncated) {
        const { Contents, IsTruncated, NextContinuationToken } =
          await client.send(command);
        const contentsList = Contents.map((c) => ` • ${c.Key}`).join("\n");
        contents += contentsList + "\n";
        isTruncated = IsTruncated;
        command.input.ContinuationToken = NextContinuationToken;
      }
      console.log(contents);
    } catch (err) {
      console.error(err);
    }




    //const s3 = new S3({
    //  accessKeyId: this.s3BucketConfig.getAccessKey(),
    //  secretAccessKey: this.s3BucketConfig.getSecretKey()
    //});
    //
    //const data = await s3.ls() upload(params).promise();

  }

  // async uploadToS3(@UploadedFiles() files) {
  //   const s3 = new S3({
  //     accessKeyId: this.s3BucketConfig.getAccessKey(),
  //     secretAccessKey: this.s3BucketConfig.getSecretKey()
  //   });
  //
  //   // This creates an s3 instance which can be used to call inbuilt functions of s3
  //   const uploadedFiles = [];
  //   for (const file of files) {
  //     let id=uuid()
  //     const params = {
  //       Bucket: 'xtables',
  //       Key: id, // Adjust path as needed
  //       Body: file.buffer,
  //     };
  //
  //     try {
  //       const data = await s3.upload(params).promise();
  //       uploadedFiles.push(data.Location);
  //     }
  //     catch (error) {
  //       console.error('Error uploading file to S3:', error);
  //     }
  //   }
  //   return uploadedFiles;
  // }
}
