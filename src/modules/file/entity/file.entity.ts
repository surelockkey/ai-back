import { Field, ObjectType } from '@nestjs/graphql';
import { BaseEntity } from '@tech-slk/nest-crud';
import { Column, Entity, OneToOne } from 'typeorm';
import { Key } from '../../customer-app/key/entity/key.entity';

@Entity('file')
@ObjectType()
export class File extends BaseEntity {
  @Field(() => String)
  @Column()
  format: string;

  @OneToOne(() => Key, (key) => key.photo, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  key: Key;
}
