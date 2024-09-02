//Advance DOM manipulation
"use-strict";
//CREATEING ELEMENT

const father1 = document.querySelector(".father1");
const child = document.createElement("div");

// father1.innerHTML = "changed!"
child.innerHTML = "Child1 called";
// father.prepend(child)

// copy that elements
father1.append(child);

//before and after
const father2 = document.querySelector(".father2");
const child2 = document.createElement("div");
child2.innerHTML = "Child2 called";

father2.before(child2);
// father2.after(child2)

//DELETE ELEMENT
const btn = document.querySelector(".btn");
btn.addEventListener("click", function () {
  btn.remove();
  //   child1.father1.removeChild(child1);
});
