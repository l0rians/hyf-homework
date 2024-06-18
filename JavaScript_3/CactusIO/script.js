const activities = [];
let currentDate = new Date().toLocaleString();

function addActivity(activity, duration) {
  activities.push({ date: currentDate, activity, duration });
}

addActivity("Discord", 20);
addActivity("TV-Show", 90);
addActivity("TV-Show", 930);
addActivity("TV-Show", 290);
addActivity("TV-Show", 490);

// console.log(activities);

function showStatus(arr, limit, day) {
  let durationSum = 0;

  for (let i = 0; i < arr.length; i++) {
    durationSum += arr[i].duration;
  }

  if (limit < durationSum) {
    return "You have reached your limit, no more smartphoning for you!";
  }

  return `"You have added ${arr.length} activities. They amount to ${durationSum} min. of usage"`;
}

function showMostSpentTime(arr) {
  let max = 0; // 20

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].duration > max) {
      max = arr[i].duration;
    }
  }

  return `The time you've spent most on: ${max}`;
}

console.log(showMostSpentTime(activities));
console.log(showStatus(activities, 100));
