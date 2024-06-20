function calculateTravelTime(travelInformation) {
  const speed = travelInformation.speed;
  const destinationDistance = travelInformation.destinationDistance;

  const totalHours = Math.floor(destinationDistance / speed);
  const totalMinutes = Math.round(
    (destinationDistance / speed - totalHours) * 60
  );

  if (speed === 0) {
    return "Speed must be more than 0";
  }

  if (totalHours === 0 && totalMinutes === 0) {
    return "0 minutes";
  }

  let travelTime = "";
  if (totalHours > 0) {
    if (totalHours === 1) {
      travelTime += `${totalHours} hour`;
    } else {
      travelTime += `${totalHours} hours`;
    }
  }

  if (totalHours > 0 && totalMinutes > 0) {
    travelTime += " and ";
  }

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
  speed: 0,
  destinationDistance: 0,
};

const travelTime = calculateTravelTime(travelInformation);
console.log(travelTime);
