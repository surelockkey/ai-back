import { Injectable } from '@nestjs/common';
import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { GraphQLError } from 'graphql';
import { DataSource } from 'typeorm';
import { UpdateLocksmithDto } from '../dto/update-locksmith.dto';
import { Locksmith } from '../entity/locksmith.entity';

@ValidatorConstraint({ name: 'UniqueUrl', async: true })
@Injectable()
export class UniqueUrlValidator implements ValidatorConstraintInterface {
  constructor(protected dataSource: DataSource) {}

  async validate(value: string, validationArguments: ValidationArguments) {
    if (!value) {
      return true;
    }
    // const entityName = validationArguments.constraints[0];
    const record: Locksmith = await this.dataSource
      .getRepository<Locksmith>('Locksmith')
      .findOne({ where: { url: value } });

    if (
      record &&
      !(
        (validationArguments.object as UpdateLocksmithDto).id &&
        record.id === (validationArguments.object as UpdateLocksmithDto).id
      )
    ) {
      throw new GraphQLError('Locksmith with provided url allready exists.');
    }

    return true;
  }
}
