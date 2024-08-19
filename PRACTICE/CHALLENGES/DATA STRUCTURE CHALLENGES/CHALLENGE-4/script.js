"use strict";
document.querySelector(".convertBtn").addEventListener("click", function () {
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
