import { Field, ID, ObjectType } from '@nestjs/graphql';
import { BaseEntity } from '@tech-slk/nest-crud';
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { ConstructedBlock } from '../../constructed-block/entity/constructed-block.entity';
import { ConstructedPreview } from '../../constructed-preview/entity/constructed-preview.entity';
import { File } from 'src/modules/file/entity/file.entity';

@Entity()
@ObjectType()
export class ConstructedPhoto extends BaseEntity {
  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  alt?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  title?: string;

  @Field(() => ID)
  @Column('uuid')
  file_id: string;

  // Relations

  @Field(() => File)
  @OneToOne(() => File, (file) => file.constructed_photo, { eager: true })
  @JoinColumn({ name: 'file_id' })
  file: File;

  @OneToOne(
    () => ConstructedBlock,
    (constructed_block) => constructed_block.photo,
    { onDelete: 'SET NULL', onUpdate: 'SET NULL', nullable: true },
  )
  block: ConstructedBlock;

  @OneToOne(
    () => ConstructedPreview,
    (constructed_preview) => constructed_preview.photo,
    { onDelete: 'SET NULL', onUpdate: 'SET NULL', nullable: true },
  )
  preview: ConstructedPreview;
}
