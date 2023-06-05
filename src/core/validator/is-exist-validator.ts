import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { DataSource } from 'typeorm';
import { ValidationArguments } from 'class-validator/types/validation/ValidationArguments';
import { GraphQLError } from 'graphql';
import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';

@ValidatorConstraint({ name: 'IsExist', async: true })
@Injectable()
export class IsExistValidator implements ValidatorConstraintInterface {
  constructor(@InjectDataSource() private readonly dataSource: DataSource) {}

  async validate(value: string, validationArguments: ValidationArguments) {
    if (!value) {
      return true;
    }
    const entityName = validationArguments.constraints[0];

    const record: unknown = await this.dataSource
      .getRepository(entityName)
      .findOne({ where: { id: value } });

    if (!record) {
      throw new GraphQLError(`${entityName} not found.`);
    }

    return Boolean(record);
  }
}
