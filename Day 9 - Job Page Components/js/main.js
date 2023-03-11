"use strict";

const workers = [...document.getElementsByClassName("worker")];

const generateRandomColor = () => {
  let hexCode = "#" + Math.floor(Math.random() * 0xffffff).toString(16);
  return hexCode;
};

workers.forEach((worker) => {
  let workerAvatar = worker.querySelector(".worker-avatar");
  let workerName = worker.querySelector(".worker-info h2").innerText;
  let letter = workerName[0];
  workerAvatar.innerText = letter;
  workerAvatar.style.color = generateRandomColor();
});
