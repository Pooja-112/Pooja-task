let stocks = {
  fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "sprinkles"]
};
let shop_open = true;
function time(ms) {
  return new Promise((resolve, reject) => {
    if (shop_open) {
      setTimeout(resolve, ms);
    } else {
      reject(console.log("shop is closed"));
    }
  });
}

async function resto() {
  try {
    await time(2000);
    console.log(`${stocks.fruits[0]} was selected`);

    await time(0000);
    console.log("Production has been started");

    await time(2000);
    console.log("Fruit has been chopped");

    await time(1000);
    console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was selected`);

    await time(1000);
    console.log("Start the machine");

    await time(2000);
    console.log(`ice cream is placed on ${stocks.holder[1]}`);

    await time(3000);
    console.log(`${stocks.toppings[1]} was added`);

    await time(2000);
    console.log("ICE CREAM IS READY TO SERVE");
  } catch (error) {
    console.log("customer left", error);
  } finally {
    console.log("THANK YOU!");
  }
}
resto();
