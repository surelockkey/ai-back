import { Global, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Log } from './entity/log.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CrudService } from '@tech-slk/nest-crud';
import { LogType } from './enum/type.enum';
import { LogGroup } from './enum/group';
import { GraphQLError } from 'graphql';
import * as moment from 'moment';
import { FindPaginationDto } from 'src/core/dto/pagination.dto';

class ActionLogDto<T> {
  callback: () => Promise<T>;
  user_id?: string;
  action: string;
  group?: LogGroup;
}

@Global()
@Injectable()
export class LoggerService extends CrudService<Log> {
  constructor(
    @InjectRepository(Log)
    private readonly logRepository: Repository<Log>,
  ) {
    super(logRepository);
  }

  public async actionLog<T>({
    action,
    user_id,
    callback,
    group = LogGroup.DEVELOPER,
  }: ActionLogDto<T>): Promise<T> {
    try {
      const call = await callback();

      this.create({
        user_id,
        type: LogType.SUCCESS,
        group,
        created_at: moment().unix(),
        action,
      });

      return call;
    } catch (e) {
      this.create({
        user_id,
        type: LogType.ERROR,
        group,
        created_at: moment().unix(),
        action,
        message: e.message,
      });

      throw new GraphQLError(e.message);
    }
  }

  public async find({ take, skip }: FindPaginationDto) {
    const [items, total] = await this.logRepository.findAndCount({
      skip,
      take,
      relations: ['user'],
      order: {
        created_at: 'DESC',
      },
    });

    return {
      items,
      total,
    };
  }
}
