function average(numbers) {
  if (numbers.length === 0 || numbers.some(isNaN)) {
    console.log("Please provide a list of valid numbers.");
  } else {
    const sum = numbers.reduce((a, b) => a + b, 0);
    const avg = sum / numbers.length;
    console.log(`The average of ${numbers.join(", ")} is ${avg}`);
  }
}
const args = process.argv.slice(2);
const numbers = args.map(Number);
average(numbers);
