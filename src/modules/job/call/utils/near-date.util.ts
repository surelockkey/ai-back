import * as moment from 'moment';
import { Call } from '../entity/call.entity';

export function getNearestDate(
  datesToBeChecked: Call[],
  dateToCheckFor: moment.MomentInput,
) {
  //   console.log(dateToCheckFor, datesToBeChecked);

  let nearestDate;

  let minDifference;

  datesToBeChecked.forEach((date) => {
    const diff = Math.abs(
      moment(date.created_sql).diff(moment(dateToCheckFor), 'milliseconds'),
    );
    if (minDifference) {
      if (diff < minDifference) {
        minDifference = diff;
        nearestDate = date;
      }
    } else {
      minDifference = diff;
      nearestDate = date;
    }

    // if (nearestDate) {
    //   if (moment(date).diff(moment(nearestDate), 'milliseconds') < 0) {
    //     nearestDate = date;
    //   }
    // } else {
    //   nearestDate = date;
    // }
  });

  // console.log('====================================');
  // console.log({ nearestDate, dateToCheckFor, datesToBeChecked, minDifference });
  // console.log('====================================');

  return nearestDate;
}
