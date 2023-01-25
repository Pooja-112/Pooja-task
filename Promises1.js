let Stocks = {
  Fruits: ["Strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolates", "spinkles"]
};
let shop_open = true;
let order = (work, time) => {
  return new Promise((resolve, reject) => {
    if (shop_open) {
      setTimeout(() => {
        resolve(work());
      }, time);
    } else {
      reject(console.log("sorry! our shop is closed"));
    }
  });
};
order(() => console.log(`${Stocks.Fruits[0]} was selected`), 2000)
  .then(() => {
    return order(() => console.log("Production has started"), 0000);
  })
  .then(() => {
    return order(() => console.log("The fruit was  chopped"), 2000);
  })
  .then(() => {
    return order(
      () =>
        console.log(`${Stocks.liquid[0]} and ${Stocks.liquid[1]} was selected`),
      1000
    );
  })
  .then(() => {
    return order(() => console.log("The machine has started "), 1000);
  })
  .then(() => {
    return order(() => console.log(`${Stocks.holder[0]} was selected `), 2000);
  })
  .then(() => {
    return order(() => console.log(`${Stocks.toppings[1]} was added`), 1000);
  })
  .then(() => {
    return order(() => console.log("ICE CREAM IS READY TO SERVE"), 2000);
  })
  .catch(() => {
    console.log("customer left");
  });