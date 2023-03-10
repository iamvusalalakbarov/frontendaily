"use strict";

const palette = document.getElementById("palette");
const button = document.querySelector("button");
const notification = document.getElementById("notification");

for (let i = 0; i < 5; i++) {
  let colorBox = document.createElement("div");
  colorBox.classList.add("color-box");

  let color = document.createElement("div");
  color.classList.add("color");

  let hex = document.createElement("span");
  hex.classList.add("hex");

  palette.appendChild(colorBox);
  colorBox.appendChild(color);
  colorBox.appendChild(hex);
}

const paletteArr = [...document.getElementsByClassName("color-box")];

const generatePalette = (paletteArr) => {
  paletteArr.forEach((colorBox) => {
    let [color, hex] = [...colorBox.children];
    let randomColor = "#" + Math.floor(Math.random() * 0xffffff).toString(16);
    color.style.backgroundColor = randomColor;
    hex.innerText = randomColor;
  });
};

const copyPalette = (paletteArr) => {
  let paletteColors = "";

  paletteArr.forEach((colorBox) => {
    let hex = colorBox.querySelector(".hex");
    paletteColors = paletteColors.concat(" ", hex.innerText);
  });

  paletteColors = paletteColors.trim();
  paletteColors = paletteColors.replaceAll(" ", ", ");
  navigator.clipboard.writeText(paletteColors);

  notification.innerHTML = "The palette copied to your clipboard";
  notification.classList.add("active");

  setTimeout(() => {
    notification.classList.remove("active");
  }, 1500);
};

window.onload = generatePalette(paletteArr);

button.addEventListener("click", () => generatePalette(paletteArr));

document.addEventListener("keydown", (e) => {
  if (e.code === "Space") {
    e.preventDefault();
    generatePalette(paletteArr);
  }
  if (e.code === "KeyC") {
    e.preventDefault();
    copyPalette(paletteArr);
  }
});

paletteArr.forEach((colorBox) => {
  colorBox.addEventListener("click", (e) => {
    let hex = colorBox.querySelector(".hex");
    navigator.clipboard.writeText(hex.innerText);

    notification.innerHTML = `Color <span class="color-code">${hex.innerText}</span> copied to your clipboard`;
    notification.classList.add("active");

    setTimeout(() => {
      notification.classList.remove("active");
    }, 1500);
  });
});
