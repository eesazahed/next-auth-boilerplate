const getTimeFormatted = (timeISO: string) => {
  const timeFormats = [
    [60, "seconds", 1],
    [120, "1 minute ago", "1 minute from now"],
    [3600, "minutes", 60],
    [7200, "1 hour ago", "1 hour from now"],
    [86400, "hours", 3600],
    [172800, "Yesterday", "Tomorrow"],
    [604800, "days", 86400],
    [1209600, "Last week", "Next week"],
    [2419200, "weeks", 604800],
    [4838400, "Last month", "Next month"],
    [29030400, "months", 2419200],
    [58060800, "Last year", "Next year"],
    [2903040000, "years", 29030400],
    [5806080000, "Last century", "Next century"],
    [58060800000, "centuries", 2903040000],
  ];

  const time = new Date(timeISO).getTime();

  let seconds = (+new Date() - time) / 1000;
  let token = "ago";
  let list_choice = 1;

  if (seconds < 60) {
    return "Just now";
  }

  if (seconds < 0) {
    seconds = Math.abs(seconds);
    token = "from now";
    list_choice = 2;
  }

  let i = 0;
  let format;

  while ((format = timeFormats[i++])) {
    if (Number(seconds) < Number(format[0])) {
      if (typeof format[2] === "string") {
        return format[list_choice];
      } else {
        return Math.floor(seconds / format[2]) + " " + format[1] + " " + token;
      }
    }
  }

  return time;
};

export default getTimeFormatted;
