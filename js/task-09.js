const refs = {
  changeColorBtn: document.querySelector(".change-color"),
  span: document.querySelector(".color"),
};

refs.changeColorBtn.addEventListener("click", changeColorBody);

function changeColorBody() {
  const color = getRandomHexColor();

  document.body.style.background = color;
  refs.span.textContent = color;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
