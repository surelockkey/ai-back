import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource, DeepPartial } from 'typeorm';
import { ConstructedPageCompany } from './entity/constructed-page-company.entity';
import { CrudService } from '@tech-slk/nest-crud';

@Injectable()
export class ConstructedPageCompanyService extends CrudService<ConstructedPageCompany> {
  constructor(
    @InjectRepository(ConstructedPageCompany)
    private readonly constructedPageCompanyRepository: Repository<ConstructedPageCompany>,
    private dataSource: DataSource,
  ) {
    super(constructedPageCompanyRepository);
  }

  // async update(criteria: any, data: any): Promise<ConstructedPageCompany> {
  //   const queryRunner = this.dataSource.createQueryRunner();
  //   await queryRunner.connect();
  //   await queryRunner.startTransaction();

  //   try {
  //     const company = await super.update(criteria, data);

  //     if (data.redirects !== undefined) {
  //       const updatedCompany = await this.findOne(criteria);
  //       if (updatedCompany?.webhook_urls?.length) {
  //         const promises = updatedCompany.webhook_urls.map((url) =>
  //           firstValueFrom(
  //             this.httpService.post(url, {
  //               type: 'redirects',
  //               redirects: updatedCompany.redirects,
  //             }),
  //           ),
  //         );
  //         await Promise.all(promises);
  //       }
  //     }

  //     await queryRunner.commitTransaction();
  //     return company;
  //   } catch (error) {
  //     await queryRunner.rollbackTransaction();
  //     throw error;
  //   } finally {
  //     await queryRunner.release();
  //   }
  // }

  async updateCompany(
    id: string,
    data: DeepPartial<ConstructedPageCompany>,
  ): Promise<ConstructedPageCompany> {
    const company = await this.updateAndReturn(id, data);

    if (data.redirects !== undefined) {
      const updatedCompany = await this.findOneById(id);
      if (updatedCompany?.webhook_urls?.length) {
        await Promise.all(
          updatedCompany.webhook_urls.map((url) =>
            fetch(url, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                type: 'redirects',
                redirects: updatedCompany.redirects,
              }),
            }).catch((error) => {
              console.error(`Failed to notify webhook ${url}:`, error);
            }),
          ),
        );
      }
    }

    return company;
  }
}
