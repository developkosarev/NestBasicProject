import { Injectable, UploadedFiles } from '@nestjs/common';
import { S3BucketConfig } from './config/s3-bucket.config';
import { S3Client, ListObjectsV2Command, PutObjectCommand, DeleteObjectCommand } from '@aws-sdk/client-s3';

@Injectable()
export class FileUploadService {
  constructor(
    private s3BucketConfig: S3BucketConfig,
  ) {}

  async list() {
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

        //console.log(Contents);
        //console.log(IsTruncated);
        //console.log(NextContinuationToken);
      }
      console.log(contents);
    } catch (err) {
      console.error(err);
    }
  }

  async put() {
    const client = new S3Client({
      region: this.s3BucketConfig.getRegion(),
      credentials: {
        accessKeyId: this.s3BucketConfig.getAccessKey(),
        secretAccessKey: this.s3BucketConfig.getSecretKey(),
      },
    });

    const command = new PutObjectCommand({
      Bucket: this.s3BucketConfig.getBucket(),
      Key: "docker.txt",
      Body: "Hello Docker",
    });

    try {
      const response = await client.send(command);
      console.log(response);
    } catch (err) {
      console.error(err);
    }
  }

  async delete() {
    const client = new S3Client({
      region: this.s3BucketConfig.getRegion(),
      credentials: {
        accessKeyId: this.s3BucketConfig.getAccessKey(),
        secretAccessKey: this.s3BucketConfig.getSecretKey(),
      },
    });

    const command = new DeleteObjectCommand({
      Bucket: this.s3BucketConfig.getBucket(),
      Key: "docker.txt",
    });

    try {
      const response = await client.send(command);
      console.log(response);
    } catch (err) {
      console.error(err);
    }
  }

}
