const input = document.getElementById('name-input');
const output = document.getElementById('name-output');

input.addEventListener("input", () => {
  const trimmedValue = input.value.trim();
  output.textContent = trimmedValue === '' ? 'Anonymous' : trimmedValue;
});


const placeholderEl = document.querySelector("#name-input")
placeholderEl.classList.add('inputEL');