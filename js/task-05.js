const refs = {
  input: document.getElementById("name-input"),
  nameLabel: document.getElementById("name-output"),
};

refs.input.addEventListener("input", onNameLabelByInput);

function onNameLabelByInput(e) {
  refs.nameLabel.textContent = e.currentTarget.value.trim()
    ? e.currentTarget.value.trim()
    : "Anonymous";
}
