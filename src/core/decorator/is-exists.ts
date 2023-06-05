import { registerDecorator, ValidationOptions } from 'class-validator';
import { IsExistValidator } from '../validator/is-exist-validator';

export function IsExist(entity: string, validationOptions?: ValidationOptions) {
  return function (object: any, id: string) {
    registerDecorator({
      name: 'isExistValidator',
      target: object.constructor,
      propertyName: id,
      constraints: [entity],
      options: validationOptions,
      validator: IsExistValidator,
    });
  };
}
