import { registerDecorator, ValidationOptions } from 'class-validator';
import { CreateLocksmithDto } from '../dto/create-locksmith.dto';
import { UniqueUrlValidator } from '../validator/unique-url.validator';

export function UniqueUrl(validationOptions?: ValidationOptions) {
  return function (object: CreateLocksmithDto, url: string) {
    registerDecorator({
      name: 'uniqueUrlValidator',
      target: object.constructor,
      propertyName: url,
      constraints: null,
      options: validationOptions,
      validator: UniqueUrlValidator,
    });
  };
}
