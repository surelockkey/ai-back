import { ArgsType, Field } from '@nestjs/graphql';
import { GraphQLUpload } from 'graphql-upload';
import { IsExist } from 'src/core/decorator/is-exists';
import { IFileUpload } from 'src/modules/upload/type/i-file-upload';

@ArgsType()
export class UploadFileToLocksmithArgs {
  @IsExist('Locksmith')
  @Field(() => String)
  locksmith_id!: string;

  @Field(() => GraphQLUpload)
  file!: Promise<IFileUpload>;
}
