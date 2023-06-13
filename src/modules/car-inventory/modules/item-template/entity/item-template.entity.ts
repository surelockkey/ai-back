import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { BaseEntity } from '@tech-slk/nest-crud';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { Template } from '../../template/entity/template.entity';
import { UpdateCarRequest } from '../../update-car/entity/update-car.entity';

@Entity('item_template')
@ObjectType()
export class ItemTemplate extends BaseEntity {
  @Field(() => String)
  @Column()
  sku: string;

  @Field(() => String)
  @Column()
  uhs_sku: string;

  @Field(() => Int)
  @Column('int')
  quantity: number;

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

  @Field(() => [UpdateCarRequest], { nullable: true })
  @OneToMany(() => UpdateCarRequest, (update_car_request) => update_car_request.item_template, { eager: true })
  requests: UpdateCarRequest[];
}
