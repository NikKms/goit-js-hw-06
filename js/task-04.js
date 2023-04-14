const refs = {
  counterValue: document.getElementById("value"),
  decrementBtn: document.querySelector('[data-action="decrement"]'),
  incrementBtn: document.querySelector('[data-action="increment"]'),
};

let counterValue = 0;

function decrementCounter(value) {
  return value - 1;
}

function incrementCounter(value) {
  return value + 1;
}

refs.decrementBtn.addEventListener("click", () => {
  counterValue = decrementCounter(counterValue);
  refs.counterValue.textContent = counterValue;
});

refs.incrementBtn.addEventListener("click", () => {
  counterValue = incrementCounter(counterValue);
  refs.counterValue.textContent = counterValue;
});
