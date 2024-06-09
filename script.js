const boxes = document.getElementById("boxes");
const indicator = document.querySelector(".indicator");
let colors = [
  "yellow",
  "green",
  "red",
  "purple",
  "violet",
  "indigo",
  "blue",
  "orange",
];

for (let color of colors) {
  let box = document.createElement("div");
  box.style.backgroundColor = color;
  box.classList.add("box");
  boxes.appendChild(box);
  box.addEventListener("mouseover", function () {
    indicator.style.backgroundColor = box.style.backgroundColor;
  });
}
