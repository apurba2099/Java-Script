"use strict";
// import { name } from "./shopping.js";

//Module Pattern
// Use IIFE
const shoppingCart = (function () {
  const cart = [];
  const orderId = 1001;
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ quantity, product });
    console.log(`${quantity} ${product} added to Cart 🛒`);
  };

  const orderStock = function (product, quantity) {
    cart.push({ quantity, product });
    console.log(
      `Quantity:${totalQuantity}, Price:${totalPrice} added to Order Stock🎙️ is ${shippingCost}`
    );
  };

  return {
    addToCart,
    orderStock,
    cart,
    totalPrice,
    totalPrice,
    totalQuantity,
  };
})();

//Note:  These are the accessable cause  addToCart are returning
shoppingCart.addToCart("apple", 4);
shoppingCart.addToCart("pizzas", 8);

shoppingCart.orderStock();

// Note: These are the encapsulate or not accessable cause this are not return on the function
console.log(shoppingCart.shippingCost);
console.log(shoppingCart.orderId);

// Note: This is overall see the function
console.log(shoppingCart);
