import { Module } from '@nestjs/common';
import { JobService } from './job.service';
import { JobResolver } from './job.resolver';
import { WorkizModule } from '../workiz/workiz.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Job } from './entity/job.entity';
import { JobTypeInfo } from './entity/job-type-info.entity';
import { JobTech } from './entity/job-tech.entity';
import { JobServiceFeeTotals } from './entity/job-service-fee-totals.entity';
import { JobProp } from './entity/job-prop.entity';
import { JobPayment } from './entity/job-payment.entity';
import { JobOtherContact } from './entity/job-other-contact.entity';
import { JobItem } from './entity/job-item.entity';
import { JobFile } from './entity/job-file.entity';
import { JobDispatchers } from './entity/job-dispatchers.entity';
import { JobDiscount } from './entity/job-discount.entity';
import { JobCustom } from './entity/job-custom.entity';
import { JobCustomFields } from './entity/job-custom-fields.entity';
import { JobCustomFieldTech } from './entity/job-custom-fields-tech.entity';
import { JobCoordinatorsChecklist } from './entity/job-coordinators-checklist.entity';
import { JobChecklistDispatch } from './entity/job-checklist-dispatch.entity';
import { JobCarKeyType } from './entity/job-car-key-type.entity';
import { JobBonuses } from './entity/job-bonuses.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Job,
      JobTech,
      JobProp,
      JobItem,
      JobFile,
      JobCustom,
      JobPayment,
      JobBonuses,
      JobTypeInfo,
      JobDiscount,
      JobCarKeyType,
      JobDispatchers,
      JobOtherContact,
      JobCustomFields,
      JobCustomFieldTech,
      JobServiceFeeTotals,
      JobChecklistDispatch,
      JobCoordinatorsChecklist,
    ]),
    WorkizModule,
  ],
  providers: [JobService, JobResolver],
})
export class JobModule {}
