const candyPrices = {
  sweet: 0.5,
  chocolate: 0.7,
  toffee: 1.1,
  "chewing-gum": 0.03,
};

const boughtCandyPrices = [];

function addCandy(candyType, weight) {
  const pricePerGram = candyPrices[candyType];
  const totalPrice = pricePerGram * weight;
  boughtCandyPrices.push(totalPrice);
}
const amountToSpend = (Math.random() * 100).toFixed();

function canBuyMoreCandy() {
  let totalSpent = 0;
  for (let price of boughtCandyPrices) {
    totalSpent += price;
  }
  if (totalSpent < amountToSpend) {
    console.log("You can buy more, so please do!");
  } else {
    console.log("Enough candy for you!");
  }
  console.log("totalSpent: ", totalSpent);
  console.log("amountToSpend: ", amountToSpend);
}
addCandy("sweet", 10);
addCandy("chocolate", 20);
addCandy("toffee", 15);
addCandy("chewing-gum", 50);

canBuyMoreCandy();
