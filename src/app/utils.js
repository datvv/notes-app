export function formatIsoDateStr(isoDateStr, showWithDate) {
  if (!isoDateStr) return "";
  const date = new Date(isoDateStr);
  if (showWithDate || !isToday(date)) {
    return formatDate(date) + " " + "at" + " " + formatShortTime(date);
  }
  return formatShortTime(date);
}

export function formatDate(date) {
  const month = date.toLocaleString("default", { month: "short" });
  const day = date.getDay();
  const year = date.getFullYear();
  return month + " " + day + ", " + year;
}

export function formatShortTime(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  let strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
}

export function isToday(date) {
  const today = new Date();
  if (
    today.getFullYear() === date.getFullYear() &&
    today.getMonth() === date.getMonth() &&
    today.getDate() === date.getDate()
  ) {
    return true;
  }
  return false;
}
