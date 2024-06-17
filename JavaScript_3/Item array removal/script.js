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
// checking if nameToRemove is empty
if (nameToRemove === "") {
  console.log("Error: Empty string.");
} else {
  // finding index of element that i need to delete
  const index = names.indexOf(nameToRemove);
  // if the element does not exist logging out error
  if (index === -1) {
    console.log("Error: Name not found in the array.");
  } else {
    // deleting element from array
    names.splice(index, 1);
    console.log(names);
  }
}
