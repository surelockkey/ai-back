import * as moment from 'moment';

export function getNearestDate(
  datesToBeChecked: moment.MomentInput[],
  dateToCheckFor: moment.MomentInput,
) {
  console.log(dateToCheckFor, datesToBeChecked);

  let nearestDate;

  datesToBeChecked.forEach((date) => {
    const diff = moment(date).diff(moment(dateToCheckFor), 'days');
    if (diff > 0) {
      if (nearestDate) {
        if (moment(date).diff(moment(nearestDate), 'days') < 0) {
          nearestDate = date;
        }
      } else {
        nearestDate = date;
      }
    }
  });

  return nearestDate;
}
