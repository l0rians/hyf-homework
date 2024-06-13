function getFullName(
  firstName,
  surName,
  useFormalName = false,
  isFemale = false
) {
  firstName = firstName.trim();
  surName = surName.trim();

  if (firstName === "" && surName === "") {
    return "";
  } else if (firstName === "") {
    return surName;
  } else if (surName === "") {
    return firstName;
  }
  let fullName = firstName + " " + surName;

  if (useFormalName) {
    if (isFemale) {
      fullName = "Lady " + fullName;
    } else {
      fullName = "Lord " + fullName;
    }
  }
  return fullName;
}

let fullName1 = getFullName("Benjamin", "Hughes", true);
let fullName2 = getFullName("Julia", "Anderson", true, true);

console.log(fullName1);
console.log(fullName2);
