/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource, In } from 'typeorm';

@Injectable()
export class UtilsService {
  constructor(@InjectDataSource() private readonly dataSource: DataSource) {}

  public async createOrUpdateArray(array: any[], get_repository: string) {
    const for_save = [];
    const photo_for_delete = [];
    for (const item of array) {
      if (item.id) {
        //for case updating constructor_blog.blocks
        if (item.photo && !item.photo.id) {
          photo_for_delete.push(item.id);
        }

        for_save.push(item);
      } else {
        const created = this.dataSource
          .getRepository(get_repository)
          .create(item);
        for_save.push(created);
      }
    }

    photo_for_delete.length &&
      (await this.dataSource
        .getRepository('PhotoForBlock')
        .delete({ blog_block_id: In(photo_for_delete) }));

    const saved = await this.dataSource
      .getRepository(get_repository)
      .save(for_save);

    return await this.dataSource
      .getRepository(get_repository)
      .find({ where: { id: In(saved.map((el) => el.id)) } });
  }
  public async saveChildrens(data: any, get_repository: any) {
    const keys = Object.keys(data);

    for (let i = 0; i < keys.length; i++) {
      if (!data[keys[i]]) {
        continue;
      }

      if (typeof data[keys[i]] === 'object' && Array.isArray(data[keys[i]])) {
        const new_array = await this.createOrUpdateArray(
          data[keys[i]],
          get_repository[keys[i]],
        );

        const created = this.dataSource
          .getRepository(get_repository[keys[i]])
          .create(data[keys[i]]);
        const saved = await this.dataSource
          .getRepository(get_repository[keys[i]])
          .save(created);
        saved[keys[i] as any] = new_array;
      } else {
        const created = this.dataSource
          .getRepository(get_repository[keys[i]])
          .create(data[keys[i]]);
        const saved = await this.dataSource
          .getRepository(get_repository[keys[i]])
          .save(created);
        const child_property = Object.keys(data[keys[i]]);

        for (let j = 0; j < child_property.length; j++) {
          if (!data[keys[i]][child_property[j]]) {
            continue;
          }
          if (
            typeof data[keys[i]][child_property[j]] === 'object' &&
            Array.isArray(data[keys[i]][child_property[j]])
          ) {
            const x = await this.createOrUpdateArray(
              data[keys[i]][child_property[j]],
              get_repository[child_property[j]],
            );

            saved[child_property[j] as any] = x;
          }
        }

        const saved_with_relations = await this.dataSource
          .getRepository(get_repository[keys[i]])
          .save(saved);
        data[keys[i]] = saved_with_relations;
      }
    }
    return data;
  }
}
