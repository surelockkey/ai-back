import { Injectable } from '@nestjs/common';
import { CrudService } from '@tech-slk/nest-crud';
import { ItemTemplate } from './entity/item-template.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ItemCompareResult } from './dto/item-compare-result.dto';
import { default_items_templates } from './constants/items-templates.constant';
import { WorkizContainerInfo } from 'src/modules/api/workiz-api/dto/container.dto';

@Injectable()
export class ItemTemplateService extends CrudService<ItemTemplate> {
  constructor(
    @InjectRepository(ItemTemplate)
    private readonly itemTemplateRepository: Repository<ItemTemplate>,
  ) {
    super(itemTemplateRepository);
  }

  public async saveDefaultItemTemplate(
    workiz_id: string,
  ): Promise<ItemTemplate[]> {
    return this.itemTemplateRepository.save(default_items_templates.map((item) => ({ ...item, workiz_id })))
  }

  public async checkItemQuantity(
    workiz_container_items: WorkizContainerInfo[],
    workiz_id: string,
    only_less?: boolean,
  ): Promise<ItemCompareResult[]> {
    const template_items = await this.itemTemplateRepository.find({ where: { workiz_id } });
    const result: ItemCompareResult[] = [];
    
    template_items.forEach((template_item) => {
      const car_item = workiz_container_items.find((car_item) =>
        car_item.item_name.includes(`(SLK-${template_item.sku})`),
      );

      if (car_item) {
        if (Number(car_item.qty) !== template_item.quantity) {
          result.push({
            name: car_item.item_name,
            sku: template_item.sku,
            uhs_sku: template_item.uhs_sku,
            actual_quantity: Number(car_item.qty) | 0,
            template_quantity: template_item.quantity,
            difference: Number(car_item.qty) | 0 - template_item.quantity,
          });
        }
      }
    });

    if (only_less) {
      result.filter((item) => item.difference < 0);
    }

    return result;
  }
}
