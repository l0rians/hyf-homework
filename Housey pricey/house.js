// Peter's parameters
let peterWidth = 8;
let peterHeight = 10;
let peterDepth = 10;
let peterGardenSize = 100;
let peterRealPrice = 2500000;

// Julia's parameters
let juliaWidth = 5;
let juliaHeigth = 8;
let juliaDepth = 11;
let juliaGardenSize = 70;
let juliaRealPrice = 1000000;

let peterVolume = peterWidth * peterHeight * peterDepth;
let juliaVolume = juliaWidth * juliaHeigth * juliaDepth;

let peterHousePrice = peterVolume * 2.5 * 1000 + peterGardenSize * 300;
let juliaHousePrice = juliaVolume * 2.5 * 1000 + juliaGardenSize * 300;

if (peterHousePrice > peterRealPrice) {
  console.log("Peter is paying too much for the house.");
} else {
  console.log("Peter is paying too little for the house");
}

if (juliaHousePrice > juliaRealPrice) {
  console.log("Julia is paying too much for the house.");
} else {
  console.log("Julia is paying too little for the house.");
}

// Your friend Peter is considering a house that is 8m wide, 10m deep and 10m high. The garden size is 100m2. The house costs 2.500.000. Your friend Julia is considering a house that is 5m wide, 11m deep and 8m high. The garden size is 70m2. This house costs 1.000.000.

// Figure out if Peter and Julia are paying too much or too little using Javascript and the formula specified above.

// housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
