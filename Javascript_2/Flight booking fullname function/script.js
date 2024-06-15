function getFullName(firstName, surName, useFormalName = false, isFemale) {
  firstName = firstName.trim();
  surName = surName.trim();

  let fullName = `${firstName} ${surName}`.trim();

  if (fullName === "") {
    return "Error, please insert you're name.";
  }
  if (useFormalName) {
    if (typeof isFemale === undefined) {
      return fullName;
    } else if (isFemale) {
      fullName = "Lady " + fullName;
    } else {
      fullName = "Lord " + fullName;
    }
  }
  return fullName;
}

const fullName1 = getFullName("Benjamin", "Hughes", true);
const fullName2 = getFullName("Julia", "Anderson", true, true);

console.log(fullName1);
console.log(fullName2);
