import { Field, ID, ObjectType } from '@nestjs/graphql';
import { BaseEntity } from '@tech-slk/nest-crud';
import { Column, Entity, JoinColumn, ManyToOne, Unique } from 'typeorm';
import { Template } from '../../template/entity/template.entity';

@Entity('car_template')
@ObjectType()
@Unique(['workiz_id'])
export class CarTemplate extends BaseEntity {
  @Field(() => String)
  @Column({ unique: true })
  workiz_id: string;

  @Field(() => ID)
  @Column()
  template_id: string;

  @ManyToOne(() => Template, (template) => template.items, {
    cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'template_id' })
  template: Template;
}
