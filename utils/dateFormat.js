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
