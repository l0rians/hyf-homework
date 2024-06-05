const firstWords = [
  "Amazing",
  "Creative",
  "Super",
  "Fantastic",
  "Smart",
  "Future",
  "Ultimate",
  "Generation",
  "Brilliant",
  "Innovative",
];
const secondWords = [
  "Solutions",
  "Ideas",
  "Concepts",
  "Technologies",
  "Systems",
  "Creations",
  "Inventions",
  "Platforms",
  "Ventures",
  "Projects",
];

const randomNumber1 = Math.floor(Math.random() * 10);
const randomNumber2 = Math.floor(Math.random() * 10);

const startupName =
  firstWords[randomNumber1] + " " + secondWords[randomNumber2];
const nameLength = startupName.length;

console.log(`The startup: "${startupName}" contains ${nameLength} characters.`);

// Lets help people who struggle finding a startup name by creating some code!

// Create two arrays called firstWords, secondWords. The arrays should have 10 elements containing strings of possible startup names. Some examples could be: "Easy", "Awesome", "Corporate".

// Create a variable called startupName that will contain the created startup name.

// Using a random index (you choose) of the arrays and concatenation of strings, create and log the new startup name and the number of characters in it. An example could be: "The startup: "Easy Corporation" contains 16 characters"

// Hint: you can use this code to generate a random number from 0-9, if you dont want to specify the indexes yourself.

// const randomNumber = Math.floor(Math.random() * 10);
