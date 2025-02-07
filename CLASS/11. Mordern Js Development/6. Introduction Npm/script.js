"use strict";

// Note: This section basically we learn whta is NPM, So NPM is stands for (NODE PACKAGE MANAGER)

// SO all the terminal code written here -

// > npm -v (-v version check).
// > npm init (init install the npm)
// use leaflet library by useing npm.

// Lodash.com
// npm i lodash-es

import cloneDeep from "./node_modules/lodash-es/cloneDeep.js";

const state = {
  cart: [
    { product: "bread", quanity: 12 },
    { product: "pizza", quanity: 12 },
  ],
  user: { loggedIn: true },
};
// Object.assign() use to clone, merge
//No, Object.assign() does not perform a deep clone. It only performs a shallow copy,
const stateClone = Object.assign({}, state);
console.log(state); //also flase
const stateDeepClone = cloneDeep(state);
console.log(stateDeepClone); //deep clone
state.user.loggedIn = false;
console.log(stateClone);//shallow copy
