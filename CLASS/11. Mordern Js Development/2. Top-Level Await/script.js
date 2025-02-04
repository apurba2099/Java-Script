import add from "./shopping.js";
add("🍎Apple", 5);

// Note: Top-Level await is only use on script type:  module only!

// async function x() {} not nessecery in top-leve await

/*
console.log("Start fetching");
const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//top-level await
const data = await res.json();
console.log(data);
console.log("Something");
*/

const getLastPost = async function () {
  console.log("Start fetching");
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  //top-level await
  const data = await res.json();
  console.log(data);

  return {
    title: data.at(-1).title,
    text: data.at(-1).body,
  };

  //   Note: .at(-1) use for fetch the last data of API.
};

const lastPost = getLastPost();
console.log(lastPost); //Always return Promise it will not return a data
//For call the last Data
lastPost.then((last) => console.log(last));

const lastPost2 = await getLastPost();
console.log(lastPost2);
