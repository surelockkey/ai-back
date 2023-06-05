import { registerDecorator, ValidationOptions } from 'class-validator';
import { CreateReviewsDto } from '../dto/create-reviews.dto';
import { BadWordsValidator } from '../validator/bad-words.validator';

export function IsSwearWord(validationOptions?: ValidationOptions) {
  return function (object: CreateReviewsDto, name: string) {
    registerDecorator({
      name: 'IsSwearWord',
      target: object.constructor,
      propertyName: name,
      constraints: null,
      options: validationOptions,
      validator: BadWordsValidator,
    });
  };
}
