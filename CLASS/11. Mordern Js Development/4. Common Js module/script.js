"use strict";

//Export
export.addToCart = function (product, quantity) {
    cart.push({ quantity, product });
    console.log(`${quantity} ${product} added to Cart 🛒`);
  };

// Import 
const {addToCart} = require('./shoppingCart.js');