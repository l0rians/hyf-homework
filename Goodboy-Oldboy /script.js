let dogYearBirth = 2014;
let dogYearFuture = 2031;
let shouldShowResultInDogYears = true;

let dogAge;
if (shouldShowResultInDogYears) {
  dogAge = dogYearFuture - dogYearBirth;
} else {
  dogAge = (dogYearFuture - dogYearBirth) * 7;
}

if (shouldShowResultInDogYears) {
  console.log(`Your dog will be ${dogAge} dog years old in ${dogYearFuture}`);
} else {
  console.log(`Your dog will be ${dogAge} human years old in ${dogYearFuture}`);
}

// Like before lets create three variables but this time we call them dogYearOfBirth, dogYearFuture and dogYear. We add an extra variable called shouldShowResultInDogYears. If it is true we should show the result in dog years, if it is false we should show it in human years. What do we call this type of variable? Now dependent on shouldShowResultInDogYears log this string out: "Your dog will be 10 human years old in 2027" or "Your dog will be 70 dog years old in 2027"
