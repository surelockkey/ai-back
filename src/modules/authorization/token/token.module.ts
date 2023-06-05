import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Token } from './entity/token.entity';
import { TokenService } from './token.service';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([Token])],
  providers: [TokenService],
  exports: [TokenService],
})
export class TokenModule {}
