import { Module } from '@nestjs/common';
import { ContactModule } from './contact/contact.module';
import { ConstructorBlogModule } from './blog/constructor-blog/constructor-blog.module';
import { PhotoBlogModule } from './blog/photos/photo-blog.module';
import { StatisticsCounterModule } from './statistics-counter/statistics-counter.module';
import { LocationPhotoModule } from './location-photo/location-photo.module';
import { LocationModule } from './location/location.module';
import { FormMemberModule } from './form-member/form-member.module';
import { LocksmithModule } from './locksmith/locksmith.module';
import { ConstructedPageModule } from './constructed-page/constructed-page.module';
import { ManageSitesEmailModule } from './manage-sites-email/manage-sites-email.module';

@Module({
  imports: [
    ContactModule,
    ConstructorBlogModule,
    PhotoBlogModule,
    StatisticsCounterModule,
    LocationModule,
    LocationPhotoModule,
    FormMemberModule,
    LocksmithModule,
    ConstructedPageModule,
    ManageSitesEmailModule,
  ],
  exports: [ManageSitesEmailModule],
})
export class ManageSitesModule {}
