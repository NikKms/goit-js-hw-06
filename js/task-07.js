const refs = {
  fontSizeControl: document.getElementById("font-size-control"),
  text: document.getElementById("text"),
};

refs.fontSizeControl.addEventListener("input", changeFontSize);

function changeFontSize(e) {
  refs.text.style.fontSize = e.target.value + "px";
}
