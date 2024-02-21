 let bill = 365;

 const tip1 = 15;
 const price = (bill * 15) / 100;

 const tip2 = 30;
 const price2 = (bill * 20) / 100;

 (bill >= 50 && bill <= 300 )
     ? console.log(`The Bill was ${bill}, the tip was ${price}, and the total value ${bill + price}, Thank you visit again😊!`)

    :console.log(`The Bill was ${bill}, the tip was ${price2}, and the total value ${bill + price2},Thank you visit again😊!`);