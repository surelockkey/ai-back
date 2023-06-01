import { Module } from '@nestjs/common';
import { ConstructorBlogResolver } from './constructor-blog.resolver';
import { ConstructorBlogService } from './constructor-blog.service';
import { ScheduleModule } from '@nestjs/schedule';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConstructorBlog } from './Entity/constructor-blog.entity';
import { UtilsModule } from 'src/utils/utils.module';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    TypeOrmModule.forFeature([ConstructorBlog]),
    UtilsModule,
  ],

  providers: [ConstructorBlogResolver, ConstructorBlogService],
  exports: [ConstructorBlogService],
})
export class ConstructorBlogModule {}
