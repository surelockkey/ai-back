import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const swearjar = require('swearjar-extended2');
let property: string;

@ValidatorConstraint({ name: 'badWords', async: false })
export class BadWordsValidator implements ValidatorConstraintInterface {
  validate(value: string, validationArguments: ValidationArguments) {
    swearjar.setLang('en');
    // if (typeof value !== 'string') {
    //     return true;
    // }
    property = validationArguments.property;
    return !swearjar.profane(value);
  }

  defaultMessage() {
    return `Field ${property} contains forbidden words`; // `Field ${property} contains forbidden words`;
  }
}
