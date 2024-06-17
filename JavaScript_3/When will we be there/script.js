// Write a function where you speficy your speed in km/h and how far you have to go in km. The function has to return the time it will take to arrive at your destination. The time should be formatted like this: 3 hours and 34 minutes.

function calculateTravelTime(speed, destinationDistance) {
  // function with 2 parametrs. Speed and distance(km/h)
  const totalHours = Math.floor(destinationDistance / speed); // dividing distance to speed so i can get hours
  const totalMinutes = Math.round(
    (destinationDistance / speed - totalHours) * 60 // getting total minutes
  );

  // if there are hours add them to travelTime string
  let travelTime = "";
  if (totalHours > 0) {
    if (totalHours === 1) {
      travelTime += `${totalHours} hour`;
    } else {
      travelTime += `${totalHours} hours`;
    }
  }
  // if there are both hours and minutes, add "and" between them
  if (totalHours > 0 && totalMinutes > 0) {
    travelTime += " and ";
  }
  // if there are minutes, add them to the travelTime string
  if (totalMinutes > 0) {
    if (totalMinutes === 1) {
      travelTime += `${totalMinutes} minute`;
    } else {
      travelTime += `${totalMinutes} minutes`;
    }
  }
  return travelTime;
}
const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

const travelTime = calculateTravelTime(50, 432);
console.log(travelTime); // 8 hours and 38 minutes
