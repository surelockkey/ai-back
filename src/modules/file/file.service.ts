import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectRepository } from '@nestjs/typeorm';
import { CrudService, SendDto } from '@tech-slk/nest-crud';
import { FileUpload } from 'graphql-upload';
import {
  DataSource,
  EntityManager,
  In,
  QueryRunner,
  Repository,
} from 'typeorm';
import { File } from './entity/file.entity';

import { S3 } from 'aws-sdk';
import {
  DeleteObjectRequest,
  ManagedUpload,
  PutObjectRequest,
} from 'aws-sdk/clients/s3';
import { GraphQLError } from 'graphql';
import * as sharp from 'sharp';
const CloudConvert = require('cloudconvert');

type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

@Injectable()
export class FileService extends CrudService<File> {
  private s3: S3;
  private cloudConvert: typeof CloudConvert;

  constructor(
    @InjectRepository(File) private readonly fileRepository: Repository<File>,
    @InjectConnection() private readonly connection: DataSource,
  ) {
    super(fileRepository);
    this.s3 = new S3({
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    });
    this.cloudConvert = new CloudConvert(process.env.CLOUD_CONVER_TOKEN);
  }

  public async uploadImageCloudConvert(file: FileUpload): Promise<File> {
    if (!file.mimetype.includes('image/')) {
      throw new GraphQLError('File is not an image');
    }

    const new_file = await this.fileRepository.save({ format: file.mimetype });

    await this.convertImageCloudConvertAndUploadS3(file, new_file.id);

    return new_file;
  }

  public async updateImageSharp(input_file: FileUpload, file_id: string) {
    const file = await input_file;

    if (!file.mimetype.includes('image/')) {
      throw new GraphQLError('File is not an image');
    }

    await this.deleteFromS3({
      Bucket: process.env.AWS_BUCKET,
      Key: file_id,
    });

    const converted_file = await this.convertImageSharp(file);

    await this.uploadToS3({
      Body: converted_file,
      Bucket: process.env.AWS_BUCKET,
      Key: file_id,
      ContentType: 'image/webp',
    }).catch(async (e) => {
      throw new GraphQLError('Failed to upload file');
    });

    return await this.findOneById(file_id);
  }

  public async uploadImageSharp(
    input_file: FileUpload,
    manager?: EntityManager,
    queryRunner?: QueryRunner,
  ): Promise<File> {
    const isManagerExist = manager || queryRunner;

    if (!isManagerExist) {
      queryRunner = await this.connection.createQueryRunner();
      await queryRunner.startTransaction();
      manager = queryRunner.manager;
    }

    try {
      const file = await input_file;

      if (!file.mimetype.includes('image/')) {
        throw new GraphQLError('File is not an image');
      }

      const new_file = await manager.save(File, { format: 'image/webp' });

      const converted_file = await this.convertImageSharp(file);

      await this.uploadToS3({
        Body: converted_file,
        Bucket: process.env.AWS_BUCKET,
        Key: new_file.id,
        ContentType: 'image/webp',
      }).catch(async (e) => {
        console.log(e);

        throw new GraphQLError('Failed to upload file');
      });

      console.log(new_file);

      return new_file;
    } catch (error) {
      console.log(error);

      if (!isManagerExist) {
        await queryRunner.rollbackTransaction();
      }

      throw new GraphQLError('Failed to upload file');
    } finally {
      if (!isManagerExist) {
        await queryRunner.commitTransaction();
        await queryRunner.release();
      }
    }
  }

  public async uploadOnePhotoFromBuffer(input_file: Buffer) {
    const file = await this.fileRepository.save({ format: 'image/webp' });

    const converted_file = await sharp(input_file).webp().toBuffer();

    await this.uploadToS3({
      Body: converted_file,
      Bucket: process.env.AWS_BUCKET,
      Key: file.id,
      ContentType: 'image/webp',
    }).catch(async (e) => {
      throw new GraphQLError('Failed to upload file');
    });

    return file;
  }

  public async convertImageCloudConvertAndUploadS3(
    file: FileUpload,
    key: string,
  ) {
    let job = await this.cloudConvert.jobs.create({
      tasks: {
        'import-1': {
          operation: 'import/upload',
        },
        'task-1': {
          operation: 'convert',
          input_format: 'jpg',
          output_format: 'webp',
          engine: 'imagemagick',
          input: ['import-1'],
        },
        'export-1': {
          key,
          operation: 'export/s3',
          input: ['task-1'],
          bucket: 'keyapp',
          region: 'us-east-2',
          access_key_id: process.env.AWS_KEY_ID,
          secret_access_key: process.env.AWS_SECRET,
        },
      },
      tag: 'jobbuilder',
    });

    const uploadTask = job.tasks.filter((task) => task.name === 'import-1')[0];

    await this.cloudConvert.tasks.upload(
      uploadTask,
      file.createReadStream(),
      file.filename,
    );

    job = await this.cloudConvert.jobs.wait(job.id).catch((e) => {
      throw new GraphQLError(e);
    });

    return job;
  }

  public async convertImageSharp(file: FileUpload): Promise<Buffer> {
    return sharp(await this.createBuffer(file))
      .webp()
      .toBuffer();
  }

  public async uploadFile(file: FileUpload) {
    const buffer = await this.createBuffer(file);
    const new_file = await this.fileRepository.save({ format: file.mimetype });
    await this.uploadToS3({
      Body: buffer,
      Bucket: process.env.AWS_BUCKET,
      Key: new_file.id,
      ContentType: file.mimetype,
    }).catch(async (e) => {
      await this.deleteById(new_file.id);
      throw new GraphQLError('Failed to upload file');
    });

    return new_file;
  }

  public async uploadManyPhotos(
    input_files: Promise<FileUpload>[],
    manager?: EntityManager,
    queryRunner?: QueryRunner,
  ): Promise<File[]> {
    if (input_files.length > 5) {
      throw new GraphQLError(
        'You cannot upload more than 5 photos simultaneously',
      );
    }
    const files = await Promise.all(
      input_files.map(async (file) => await file),
    );

    const isManagerExist = manager || queryRunner;

    if (!isManagerExist) {
      queryRunner = await this.connection.createQueryRunner();
      await queryRunner.connect();
      await queryRunner.startTransaction();
      manager = queryRunner.manager;
    }

    try {
      const photos = await this.saveManyPhotos(files, manager, queryRunner);

      const converted_files: Buffer[] = await this.convertManyPhotosSharp(
        files,
      ).catch(async () => {
        throw new GraphQLError('Converting files failed');
      });

      await this.uploadManyToS3(converted_files, (converted_file, i) => {
        return {
          Body: converted_file,
          Bucket: process.env.AWS_BUCKET,
          Key: photos[i].id,
          ContentType: files[i].mimetype,
        };
      });

      if (!isManagerExist) await queryRunner.commitTransaction();

      return photos;
    } catch (error) {
      if (!isManagerExist) await queryRunner.rollbackTransaction();
      throw new GraphQLError('Failed to upload files');
    } finally {
      if (!isManagerExist) {
        await queryRunner.release();
      }
    }
  }

  public async saveManyPhotos(
    photos: FileUpload[],
    manager: EntityManager,
    queryRunner: QueryRunner,
  ): Promise<File[]> {
    return await manager.save(
      File,
      photos.map((photo) => {
        if (!photo.mimetype.includes('image/')) {
          throw new GraphQLError('Some of files is not images');
        }
        return {
          format: photo.mimetype,
        };
      }),
    );
  }

  public async deleteFile(
    key: string,
    manager?: EntityManager,
    queryRunner?: QueryRunner,
  ): Promise<SendDto> {
    const isManagerExist = manager || queryRunner;

    if (!isManagerExist) {
      queryRunner = await this.connection.createQueryRunner();
      await queryRunner.startTransaction();
      manager = queryRunner.manager;
    }

    try {
      await this.deleteFromS3({
        Bucket: process.env.AWS_BUCKET,
        Key: key,
      });

      await manager.delete(File, { id: key });

      if (!isManagerExist) await queryRunner.commitTransaction();

      return {
        message: 'Success',
        status: 201,
      };
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw new GraphQLError('Failed to delete file', { originalError: error });
    } finally {
      if (!isManagerExist) {
        await queryRunner.release();
      }
    }
  }

  public async deleteManyFiles(
    keys: string[],
    manager?: EntityManager,
    queryRunner?: QueryRunner,
  ) {
    const isManagerExist = manager || queryRunner;

    if (!isManagerExist) {
      queryRunner = await this.connection.createQueryRunner();
      await queryRunner.startTransaction();
      manager = queryRunner.manager;
    }

    try {
      await this.deleteManyFromS3(keys);
      await this.fileRepository.delete({ id: In(keys) });
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw new GraphQLError('Failed to delete file', { originalError: error });
    } finally {
      if (!isManagerExist) {
        await queryRunner.release();
      }
    }
  }

  private async convertManyPhotosSharp(files: FileUpload[]): Promise<Buffer[]> {
    return await Promise.all(
      files.map((file) => {
        return this.convertImageSharp(file);
      }),
    );
  }

  public async uploadManyToS3(
    files: Buffer[],
    callback: (file?: Buffer, i?: number) => PutObjectRequest,
  ) {
    await Promise.all(
      files.map((file, i) => {
        return this.uploadToS3(callback(file, i));
      }),
    );
  }

  private async uploadToS3(
    params: PutObjectRequest,
  ): Promise<ManagedUpload.SendData> {
    return new Promise((resolve, reject) => {
      this.s3.upload(params, async (err, data) => {
        if (err) reject(err);
        if (data) resolve(data);
      });
    });
  }

  public async deleteFromS3(params: PartialBy<DeleteObjectRequest, 'Bucket'>) {
    return new Promise((resolve, reject) => {
      this.s3.deleteObject(
        {
          Bucket: process.env.AWS_BUCKET,
          ...params,
        },
        async (err, data) => {
          if (err) reject(err);
          if (data) resolve(data);
        },
      );
    });
  }

  public async deleteManyFromS3(keys: string[]) {
    return new Promise((resolve, reject) => {
      this.s3.deleteObjects(
        {
          Bucket: process.env.AWS_BUCKET,
          Delete: {
            Objects: keys.map((key) => {
              return {
                Key: key,
              };
            }),
          },
        },
        async (err, data) => {
          if (err) reject(err);
          if (data) resolve(data);
        },
      );
    });
  }

  public async createBuffer(file: FileUpload): Promise<Buffer> {
    const { createReadStream } = file;
    const stream = createReadStream();
    const chunks = [];
    for await (const chunk of stream) {
      chunks.push(chunk);
    }

    return Buffer.concat(chunks);
  }
}
