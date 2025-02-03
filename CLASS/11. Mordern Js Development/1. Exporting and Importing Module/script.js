//Importing Module
// import { addToCart, totalPrice as price, qt } from "./shoppingCart.js";
// // Note: we can easy to name change by "as".

// //Exporting From the shoppingCart
// addToCart("Bread", 5);
// console.log(price, qt);

console.log("Importing Module");
// console.log(shippingCost);

// import * as ShoppingCart from "./shoppingCart.js";
// // Note: import every * thing into object

// //Note: call the function like object by importing
// ShoppingCart.addToCart("bread", 5);
// console.log("Price: ", ShoppingCart.totalPrice);

//DEFAULT IMPORT MODULE

//Note: To mix default and named exports avoid that to reduce Complexity
// import add, { addToCart, totalPrice as price, qt } from "./shoppingCart.js";
// addToCart("Banana🍌", 3);
// console.log(price);

// Note: in situation use to default or named.
// {cart} make the objects like.
import add, {cart} from "./shoppingCart.js";
add("pizza🍕", 2);
add("bread🍞", 4);
add("apples🍎", 8);

console.log(cart)