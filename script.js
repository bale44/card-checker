import { input, button, result } from "./modules/variables.js";
import { cardName } from "./modules/cardName.js";
import { clearInput } from "./modules/clearInput.js";

button.addEventListener("click", () => {
  const cardNumber = input.value;
  const name = cardName(cardNumber);
  if (!/^\d+$/.test(cardNumber)) {
    result.textContent = "You can write only numbers";
    result.style.color = "red";
    return;
  }
  if (name === false) {
    result.textContent = "Card type: unknown";
    clearInput();
  } else {
    result.textContent = `Card type: ${name}`;
    clearInput();
  }
});
