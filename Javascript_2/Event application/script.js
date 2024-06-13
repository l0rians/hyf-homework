function getEventWeekday(daysFromToday) {
  const weekDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const today = new Date();

  let todayIndex = today.getDay();

  todayIndex = (todayIndex + 6) % 7;
  const eventDayIndex = (todayIndex + daysFromToday) % 7;

  return weekDays[eventDayIndex];
}
console.log(getEventWeekday(5)); // 5 days from today
console.log(getEventWeekday(9)); // 9 days from today
console.log(getEventWeekday(3)); // 3 days from today
