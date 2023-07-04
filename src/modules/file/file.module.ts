import { Global, Module } from "@nestjs/common";
import { FileService } from "./file.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { File } from "./entity/file.entity";

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([File])],
  providers: [FileService],
  exports: [FileService],
})
export class FileModule {}
