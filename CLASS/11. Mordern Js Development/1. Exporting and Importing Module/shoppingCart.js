//Exporting Module

console.log("Exporting Module");
const shippingCost = 10;

export const cart = [];

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to the cart`);
};

const totalPrice = 236;
const totalQuantity = 23;
export { totalPrice, totalQuantity as qt };
// Note: we can easy to name change by "as".

//DEFAULT EXPORT MODULE
export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to the cart`);
}
