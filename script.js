const boxes = document.getElementById("boxes");
const indicator = document.querySelector(".indicator");
let colors = [];

fetch("https://reqres.in/api/unknown", { method: "GET" })
  .then((responseInfo) => {
    if (!responseInfo.ok) {
      throw responseInfo.status;
    }
    return responseInfo.json();
  })
  .then((responseData) => {
    const data = responseData.data;
    for (let obj of data) {
      colors.push(obj.color);
    }
    console.log(colors);

    for (let color of colors) {
      let box = document.createElement("div");
      box.style.backgroundColor = color;
      box.classList.add("box");
      boxes.appendChild(box);
      box.addEventListener("mouseover", function () {
        indicator.style.backgroundColor = box.style.backgroundColor;
      });
    }
  });
