import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { randomBytes } from 'crypto';
import { BucketName } from './enum/bucket.enum';
import { UploadFileResult } from './type/upload-result';
import {
  S3Client,
  PutObjectCommand,
  DeleteObjectCommand,
  PutObjectCommandInput,
  DeleteObjectsCommand,
} from '@aws-sdk/client-s3';
import { IFileUpload } from './type/i-file-upload';
import { GraphQLError } from 'graphql';

export declare type ConfigType = {
  [key: string]: string;
};

@Injectable()
export class UploadService {
  private s3: S3Client;
  private aws_config: ConfigType;

  constructor(private readonly configService: ConfigService) {
    this.aws_config = this.configService.get('aws');

    this.s3 = new S3Client({
      region: this.aws_config.region,
      credentials: {
        accessKeyId: this.aws_config.access_key_id,
        secretAccessKey: this.aws_config.access_key,
      },
    });
  }

  public async uploadFile(
    file: IFileUpload,
    bucket_name?: BucketName,
  ): Promise<UploadFileResult> {
    const file_buffer = file.createReadStream();
    const key = await this.generateRandKeyForImg();
    const data = await this.uploadToS3({
      Bucket: bucket_name
        ? this.aws_config[bucket_name]
        : this.aws_config.bucket,
      Key: String(key),
      Body: file_buffer,
      CacheControl: 'no-cache',
      ContentType: file.mimetype,
      ContentLength: file.filesize,
    });
    return data;
  }

  private async uploadToS3(
    uploadParams: PutObjectCommandInput,
  ): Promise<UploadFileResult> {
    const uploadCommand = new PutObjectCommand(uploadParams);
    try {
      await this.s3.send(uploadCommand);

      return {
        Key: uploadParams.Key,
        Url: `https://${uploadParams.Bucket}.s3-${this.aws_config.region}.amazonaws.com/${uploadParams.Key}`,
      };
    } catch (err) {
      console.error(err);
    }
  }

  private async generateRandKeyForImg(): Promise<string> {
    let key = '';
    key = randomBytes(16).toString('hex');

    return key;
  }

  public async deleteFile(key: string) {
    const deleteCommand = new DeleteObjectCommand({
      Bucket: this.aws_config.bucket,
      Key: key,
    });
    await this.s3.send(deleteCommand);
  }

  public async deleteManyFiles(keys: string[], bucket?: string) {
    //* argument bucket needed for case when deleting file from bucket_locksmith
    const deleteCommand = new DeleteObjectsCommand({
      Bucket: bucket ? bucket : this.aws_config.bucket,
      Delete: {
        Objects: keys.map((key) => {
          return {
            Key: key,
          };
        }),
      },
    });

    const response = await this.s3.send(deleteCommand);
    if (response.Errors && response.Errors.length) {
      throw new GraphQLError(response.Errors[0].Message);
    }
  }
}
