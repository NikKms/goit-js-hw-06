const refs = {
  input: document.getElementById("validation-input"),
};

refs.input.addEventListener("blur", onInputBlur);

function onInputBlur(e) {
  const requiredLength = Number(e.target.getAttribute("data-length"));
  const inputLength = e.target.value.trim().length;
  const isValid = inputLength === requiredLength;

  e.target.classList.toggle("valid", isValid);
  e.target.classList.toggle("invalid", !isValid);
}
