import { FileUpload } from 'graphql-upload';

export interface IFileUpload extends FileUpload {
  filesize: number;
}
