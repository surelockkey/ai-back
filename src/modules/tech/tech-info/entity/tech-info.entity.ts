import { Field, ID, ObjectType } from '@nestjs/graphql';
import { BaseEntity } from '@tech-slk/nest-crud';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Tech } from '../../entity/tech.entity';

@Entity('tech-info')
@ObjectType()
export class TechInfo extends BaseEntity {
  @Field(() => ID)
  @Column('uuid')
  tech_id: string;

  @Field(() => String)
  @Column()
  key: string;

  @Field(() => String)
  @Column()
  value: string;

  @ManyToOne(() => Tech, (tech) => tech.info, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'tech_id' })
  tech: Tech;
}
