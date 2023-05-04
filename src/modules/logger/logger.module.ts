import { Global, Module } from '@nestjs/common';
import { LoggerService } from './logger.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Log } from './entity/log.entity';
import { LoggerResolver } from './logger.resolver';

@Global()
@Module({
    imports: [TypeOrmModule.forFeature([Log])],
    providers: [LoggerService, LoggerResolver],
    exports: [LoggerService]
})
export class LoggerModule { }
