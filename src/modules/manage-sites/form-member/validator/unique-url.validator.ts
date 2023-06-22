import { Injectable } from '@nestjs/common';
import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { GraphQLError } from 'graphql';
import { UpdateLocksmithDto } from '../dto/update-locksmith.dto';
import { Locksmith } from '../entity/locksmith.entity';
import { DataSource } from 'typeorm';

@ValidatorConstraint({ name: 'UniqueUrl', async: true })
@Injectable()
export class UniqueUrlValidator implements ValidatorConstraintInterface {
  constructor(private readonly dataSource: DataSource) {}

  async validate(value: string, validationArguments: ValidationArguments) {
    if (!value) {
      return true;
    }

    const queryRunner = await this.dataSource.createQueryRunner();
    const record: Locksmith = await queryRunner.manager.findOne(Locksmith, {
      where: { url: value },
    });

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
