//Exporting Module
console.log("Exporting Module");

//Blocking Code
console.log("Start fetching users");

await fetch("https://jsonplaceholder.typicode.com/posts");
console.log("Finish fetching users");

export const cart = [];
export default function (product, quantity) {
  cart.push(quantity, product);
  console.log(`${quantity} ${product} added to cart`);
}
