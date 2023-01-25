let Stocks = {
    Fruits: ["strawberry", "grapes", "Banana", "apple"],
    Liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"]
  };
  let order = (Fruit_name, call_production) => {
    setTimeout(() => {
      console.log(`${Stocks.Fruits[Fruit_name]} was selected`);
      call_production();
    }, 2000);
  };
  let production = () => {
    setTimeout(() => {
      console.log("production has started");
      setTimeout(() => {
        console.log("The fruit has been chopped");
        setTimeout(() => {
          console.log(`${Stocks.Liquid[0]} and ${Stocks.Liquid[1]} Added`);
          setTimeout(() => {
            console.log("start the machine");
            setTimeout(() => {
              console.log(`Ice cream placed on ${Stocks.holder[1]}`);
              setTimeout(() => {
                console.log(`${Stocks.toppings[0]} as toppings`);
                setTimeout(() => {
                  console.log("serve Ice cream");
                }, 2000);
              }, 3000);
            }, 2000);
          }, 1000);
        }, 1000);
      }, 2000);
    }, 0000);
  };
  order(0, production);
  