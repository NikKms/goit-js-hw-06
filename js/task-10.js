const refs = {
  controls: document.getElementById("controls"),
  input: document.querySelector("#controls input"),
  createBtn: document.querySelector("[data-create]"),
  destroyBtn: document.querySelector("[data-destroy]"),
  boxesContainer: document.querySelector("#boxes"),
};

let boxes = [];

refs.createBtn.addEventListener("click", () => createBoxes(refs.input.value));
refs.destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  const baseSizeBox = 30;
  boxes = [];

  refs.boxesContainer.innerHTML = "";
  refs.boxesContainer.style.cssText = `
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 15px 30px;
    margin-top: 30px;
    `;

  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    const sizeBox = baseSizeBox + i * 10;
    const span = document.createElement("span");
    const fontSize = Math.floor(sizeBox / 3);
    span.textContent = getRandomNumber();

    span.style.cssText = `
    color: ${getRandomHexColor()};
    font-size: ${fontSize}px;
    opacity : 0;
    `;

    box.style.cssText = `
      width: ${sizeBox}px;
      height: ${sizeBox}px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${getRandomHexColor()};
      opacity: 0;
    `;
    setTimeout(() => {
      span.style.opacity = 1;
    }, i * 450);

    setTimeout(() => {
      box.style.opacity = 1;
    }, i * 250);

    box.appendChild(span);
    refs.boxesContainer.appendChild(box);
    boxes.push(box);
  }
}

function destroyBoxes() {
  boxes.forEach((box) => box.remove());
  boxes = [];
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function getRandomNumber() {
  return Math.floor(Math.random() * 100);
}
