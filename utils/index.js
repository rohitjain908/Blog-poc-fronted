const MONTH = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];
export const getFormattedDate = (date) => {
  const dateInstance = new Date(date);

  return `${MONTH[dateInstance.getMonth()]} ${dateInstance.getFullYear()}`;
};
