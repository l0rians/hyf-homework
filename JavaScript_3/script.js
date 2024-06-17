//task {Remove the item in names that is equal to nameToRemove}

const names = [
  "Peter",
  "Ahmad",
  "Yana",
  "Kristina",
  "Rasmus",
  "Samuel",
  "Katrine",
  "Tala",
];
const nameToRemove = "Ahmad";

if (nameToRemove === "") {
  console.log("Error: Empty string.");
} else {
  const index = names.indexOf(nameToRemove);
  if (index === -1) {
    console.log("Error: Name not found in the array.");
  } else {
    names.splice(index, 1);
    console.log(names);
  }
}
