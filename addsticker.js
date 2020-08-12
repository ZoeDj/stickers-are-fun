const images = [
  "img/butterfly.png",
  "img/switch.png",
  "img/holographic.png",
  "img/wp.png",
  "img/fairy1.png",
  "img/queenjs.png",
  "img/css.png",
];

let i = 0;
function addSticker(x, y) {
  const nextSticker = images[i];
  const img = document.createElement("img");
  img.setAttribute("src", nextSticker);
  img.style.left = x + "px";
  img.style.top = y + "px";
  img.style.transform = `translate(-50%, -50%) scale(0.5) rotate(${
    Math.random() * 20 - 10
  }deg) `;

  document.body.appendChild(img);
  i = i + 1;
  if (i >= images.length) {
    i = 0;
  }
}

document.addEventListener("click", function (event) {
  event.preventDefault();
  addSticker(event.pageX, event.pageY);
});
