function getEventWeekday(daysFromToday) {
  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const today = new Date();

  let todayIndex = today.getDay();

  const eventDayIndex = (todayIndex + daysFromToday) % 7;

  return weekDays[eventDayIndex];
}
console.log(getEventWeekday(1)); // 5 days from today
console.log(getEventWeekday(9)); // 9 days from today
console.log(getEventWeekday(3)); // 3 days from today
