import * as moment from 'moment';

export function getNearestDate(
  datesToBeChecked: moment.MomentInput[],
  dateToCheckFor: moment.MomentInput,
) {
  console.log(dateToCheckFor, datesToBeChecked);

  let nearestDate;

  let minDifference;

  datesToBeChecked.forEach((date) => {
    const diff = +moment(date).diff(moment(dateToCheckFor), 'milliseconds');
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

  return nearestDate;
}
