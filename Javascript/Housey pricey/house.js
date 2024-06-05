// Peter's parameters
let peterHouseWidth = 8;
let peterHouseHeight = 10;
let peterHouseDepth = 10;
let peterHouseGardenSize = 100;
let peterHouseRealPrice = 2500000;

// Julia's parameters
let juliaHouseWidth = 5;
let juliaHouseHeigth = 8;
let juliaHouseDepth = 11;
let juliaHouseGardenSize = 70;
let juliaHouseRealPrice = 1000000;

let peterHouseVolume = peterHouseWidth * peterHouseHeight * peterHouseDepth;
let juliaHouseVolume = juliaHouseWidth * juliaHouseHeigth * juliaHouseDepth;

let peterHousePrice =
  peterHouseVolume * 2.5 * 1000 + peterHouseGardenSize * 300;
let juliaHousePrice =
  juliaHouseVolume * 2.5 * 1000 + juliaHouseGardenSize * 300;

if (peterHousePrice > peterHouseRealPrice) {
  console.log("Peter is paying too much for the house.");
} else {
  console.log("Peter is paying too little for the house");
}

if (juliaHousePrice > juliaHouseRealPrice) {
  console.log("Julia is paying too much for the house.");
} else {
  console.log("Julia is paying too little for the house.");
}

// Your friend Peter is considering a house that is 8m wide, 10m deep and 10m high. The garden size is 100m2. The house costs 2.500.000. Your friend Julia is considering a house that is 5m wide, 11m deep and 8m high. The garden size is 70m2. This house costs 1.000.000.

// Figure out if Peter and Julia are paying too much or too little using Javascript and the formula specified above.

// housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
