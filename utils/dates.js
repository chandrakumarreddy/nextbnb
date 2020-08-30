import dateFnsFormat from "date-fns/format";
import dateFnsParse from "date-fns/parse";
import isDate from "date-fns/isDate";

export const format = "dd MMM yyyy";

export const parseDate = (str, format, locale) => {
  const parsed = dateFnsParse(str, format, new Date(), { locale });
  return isDate(parsed) ? parsed : null;
};

export const formatDate = (date, format, locale) =>
  dateFnsFormat(date, format, { locale });

export const numberOfNightsBetweenDates = (startDate, endDate) => {
  const newStartDate = new Date(startDate);
  const newEndDate = new Date(endDate);
  let count = 0;
  while (endDate > startDate) {
    count++;
    newEndDate.setDate(newStartDate.getDate() + 1);
  }
  return count;
};
