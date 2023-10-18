import * as moment from 'moment';

export function getNearestDate(
  datesToBeChecked: moment.MomentInput[],
  dateToCheckFor: moment.MomentInput,
) {
  let nearestDate;

  datesToBeChecked.forEach((date) => {
    const diff = moment(date).utc().diff(moment(dateToCheckFor), 'days');
    if (diff > 0) {
      if (nearestDate) {
        if (moment(date).utc().diff(moment(nearestDate), 'days') < 0) {
          nearestDate = date;
        }
      } else {
        nearestDate = date;
      }
    }
  });

  return nearestDate;
}
