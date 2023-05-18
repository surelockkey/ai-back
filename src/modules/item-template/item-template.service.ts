import { Injectable } from '@nestjs/common';
import { CrudService } from '@tech-slk/nest-crud';
import { ItemTemplate } from './entity/item-template.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FileUpload } from 'graphql-upload';
import * as csvParser from 'csv-parser';
import { GraphQLError } from 'graphql';
import { ItemCompareResult } from './dto/item-compare-result.dto';

interface ItemTemplateCsv {
  'UHS SKU': string;
  'S.L.K SKU': string;
  Quantity: string;
}

interface CarItemCsv {
  'Product Name': string;
  Quantity: string;
  Price: string;
  Cost: string;
}

@Injectable()
export class ItemTemplateService extends CrudService<ItemTemplate> {
  constructor(
    @InjectRepository(ItemTemplate)
    private readonly itemTemplateRepository: Repository<ItemTemplate>,
  ) {
    super(itemTemplateRepository);
  }

  public async uploadItemTemplatesFromCsv(file: Promise<FileUpload>) {
    console.log(file);

    const items = await this.readCsv<ItemTemplateCsv>(await file);

    return await this.itemTemplateRepository.save(
      items
        .filter((item) => item['S.L.K SKU'])
        .map((item) => {
          if (isNaN(parseInt(item.Quantity))) {
            throw new GraphQLError('Invalid quantity');
          }
          return {
            sku: item['S.L.K SKU'],
            uhs_sku: item['UHS SKU'],
            quantity: parseInt(item.Quantity),
          };
        }),
    );
  }

  public async checkItemQuantity(
    file: Promise<FileUpload>,
    only_less?: boolean,
  ) {
    const car_items = await this.getCarItemsFromFile(file);
    const template_items = await this.findAll();

    const result: ItemCompareResult[] = [];
    template_items.forEach((template_item) => {
      const car_item = car_items.find((car_item) =>
        car_item.name.includes(`(SLK-${template_item.sku})`),
      );

      if (car_item) {
        if (car_item.quantity !== template_item.quantity) {
          result.push({
            name: car_item.name,
            sku: template_item.sku,
            uhs_sku: template_item.uhs_sku,
            actual_quantity: car_item.quantity,
            template_quantity: template_item.quantity,
            difference: car_item.quantity - template_item.quantity,
          });
        }
      }
    });

    if (only_less) {
      result.filter((item) => item.difference < 0);
    }

    return result;
  }

  private async getCarItemsFromFile(file: Promise<FileUpload>) {
    return (await this.readCsv<CarItemCsv>(await file))
      .filter((item) => item['Product Name'] && !isNaN(parseInt(item.Quantity)))
      .map((item) => {
        return {
          name: item['Product Name'],
          quantity: parseInt(item.Quantity),
          price: item.Price,
          cost: item.Cost,
        };
      });
  }

  private async readCsv<T>(file: FileUpload): Promise<T[]> {
    return new Promise((resolve) => {
      const result: T[] = [];

      file
        .createReadStream()
        .pipe(csvParser())
        .on('data', (data) => {
          result.push(data);
        })
        .on('end', () => {
          resolve(result);
        });
    });
  }
}
