// ======== Highest and Lowest 7 kyu ======== //
function highAndLow(numbers) {
  const result = numbers.split(" ");

  let min = Math.min(...result);
  let max = Math.max(...result);

  return `${max} ${min}`;
}
// ======== Highest and Lowest 7 kyu ======== //
