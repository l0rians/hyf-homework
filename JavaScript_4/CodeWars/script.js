// ======== Highest and Lowest 7 kyu ======== //
function highAndLow(numbers) {
  const result = numbers.split(" ");

  let min = Math.min(...result);
  let max = Math.max(...result);

  return `${max} ${min}`;
}
// ======== Highest and Lowest 7 kyu ======== //

// ======== Square every digit 7 kyu ======== //
function squareDigits(num) {
  let numStr = num.toString(); // changing number to a string
  let result = ""; // empty variable to save the result

  for (let i = 0; i < numStr.length; i++) {
    let digit = parseInt(numStr[i]); // changing symbol again into a number
    let squared = digit * digit; // digiting
    result += squared; //
  }

  return parseInt(result); // changing the result again to a num and returning it
}

console.log(squareDigits(9119)); // should be 811181
console.log(squareDigits(765)); // should be 493625
// ======== Square every digit 7 kyu ======== //

// ======== Vowel count 7 kyu =========== //
function getCount(str) {
  const vowels = "aeiou"; // string that includes all vowels
  let count = 0; // empty variable to count the vowels in word

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      // checking if the current char includes vowels
      count++; // raising the count if the symbol includes vowel
    }
  }

  return count;
}
console.log(getCount("hello world")); // should be 3
console.log(getCount("abracadabra")); // should be  5
// ======== Vowel count 7 kyu =========== //
