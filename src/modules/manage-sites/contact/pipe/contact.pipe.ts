import { PipeTransform, Injectable } from '@nestjs/common';

@Injectable()
export class ValidationCreateContactPipe implements PipeTransform {
  async transform(value: any) {
    for (const property in value) {
      if (typeof value[property] === 'boolean') {
        continue;
      }

      value[property] = value[property]
        .split(' ')
        .filter((n: any) => n)
        .join(' ');
    }

    return value;
  }
}
