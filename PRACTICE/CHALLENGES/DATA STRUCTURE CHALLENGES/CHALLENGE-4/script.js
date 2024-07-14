"use strict";
// document.body.append(document.createElement("textarea"));
// document.body.append(document.createElement("button"));

const submitBtn = document.querySelector(".btn");
const textarea = document.querySelector(".areatext").value;

submitBtn.addEventListener("click", function () {
  const text = document.getElementById("textarea").value;
  const lines = text.split("\n");

  for (let line of lines) {
    if (line.trim()) {
      const words = line.trim().toLowerCase().split("_");
      let camelCase = words[0];
      for (let i = 1; i < words.length; i++) {
        camelCase += words[i].charAt(0).toUpperCase() + words[i].slice(1);
      }
      console.log(camelCase);
    }
  }
});
