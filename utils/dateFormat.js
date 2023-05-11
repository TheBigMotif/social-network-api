const addDateSuffix = (date) => {
  let dateStr = date.toString();

  const lastTwoChars = dateStr.slice(-2);

  const lastChar = dateStr.charAt(dateStr.length - 1);

  if (lastTwoChars >= 11 && lastTwoChars <= 13) {
    dateStr = `${dateStr}th`;
  } else if (lastChar === "1") {
    dateStr = `${dateStr}st`;
  } else if (lastChar === "2") {
    dateStr = `${dateStr}nd`;
  } else if (lastChar === "3") {
    dateStr = `${dateStr}rd`;
  } else {
    dateStr = `${dateStr}th`;
  }

  return dateStr;
};

const formatTimestamp = (
  timestamp,
  { monthLength = "short", dateSuffix = true } = {}
) => {
  const months = {
    0: monthLength === "short" ? "Jan" : "January",
    1: monthLength === "short" ? "Feb" : "February",
    2: monthLength === "short" ? "Mar" : "March",
    3: monthLength === "short" ? "Apr" : "April",
    4: monthLength === "short" ? "May" : "May",
    5: monthLength === "short" ? "Jun" : "June",
    6: monthLength === "short" ? "Jul" : "July",
    7: monthLength === "short" ? "Aug" : "August",
    8: monthLength === "short" ? "Sep" : "September",
    9: monthLength === "short" ? "Oct" : "October",
    10: monthLength === "short" ? "Nov" : "November",
    11: monthLength === "short" ? "Dec" : "December",
  };

  const dateObj = new Date(timestamp);
  const formattedMonth = months[dateObj.getMonth()];

  const dayOfMonth = dateSuffix
    ? addDateSuffix(dateObj.getDate())
    : dateObj.getDate();

  const year = dateObj.getFullYear();
  let hour = dateObj.getHours();
  let periodOfDay = "am";

  if (hour >= 12) {
    hour -= 12;
    periodOfDay = "pm";
  }

  if (hour === 0) {
    hour = 12;
  }

  const minutes = (dateObj.getMinutes() < 10 ? "0" : "") + dateObj.getMinutes();

  const formattedTimestamp = `${formattedMonth} ${dayOfMonth}, ${year} at ${hour}:${minutes} ${periodOfDay}`;

  return formattedTimestamp;
};
