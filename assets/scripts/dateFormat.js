export const getFormatedDate = (date) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let curr_date = date.getDate();
  let curr_month = date.getMonth();
  let curr_day = date.getDay();
  return curr_date + "-" + months[curr_month] + "-" + days[curr_day];
};
