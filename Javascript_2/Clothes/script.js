function clothesSuggest(temperature) {
  if (temperature >= 25) {
    return "shorts and a t-shirt";
  } else if (temperature >= 20) {
    return "pants and t-shirt";
  } else if (temperature >= 15) {
    return "jeans and sweater";
  } else if (temperature >= 10) {
    return "warm pants and jacket";
  } else {
    return "warm clothes";
  }
}
const clothesToWear = clothesSuggest(21);
console.log(clothesToWear);
