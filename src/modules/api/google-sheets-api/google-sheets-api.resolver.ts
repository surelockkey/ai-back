import { Args, Query, Resolver } from '@nestjs/graphql';
import { GoogleSheetsApiService } from './google-sheets-api.service';
import { GoogleSheetsTechSchedule } from './dto/tech-schedule.dto';

@Resolver()
export class GoogleSheetsApiResolver {
  constructor(
    private readonly googleSheetsApiService: GoogleSheetsApiService,
  ) {}
  @Query(() => [[String]])
  getSheet(
    @Args('sheet_id') sheet_id: string,
    @Args('tab_name') tab_name: string,
    @Args('col') col: string,
    @Args('row') row: string,
  ) {
    return this.googleSheetsApiService.getSheet(sheet_id, tab_name, col, row);
  }

  @Query(() => [GoogleSheetsTechSchedule])
  getTechsSchedule() {
    return this.googleSheetsApiService.getTechsSchedule();
  }
}
