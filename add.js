const input = document.querySelector("input");
const button = document.querySelector(".checkBtn");
const result = document.querySelector(".result");

function clearInput() {
  input.value = "";
}

const cardName = (cardNumber) => {
  const mastercardLength = 16;
  const visaLengths = [13, 16];
  const americanExpressLength = 15;
  const mastercardStartsWith = /^5[1-5]/;
  const visaStartsWith = /^4/;
  const americanExpressStartsWith = /^3[47]/;
  if (
    cardNumber.length === mastercardLength &&
    cardNumber.match(mastercardStartsWith)
  ) {
    return "Mastercard";
  } else if (
    visaLengths.includes(cardNumber.length) &&
    cardNumber.match(visaStartsWith)
  ) {
    return "Visa";
  } else if (
    cardNumber.length === americanExpressLength &&
    cardNumber.match(americanExpressStartsWith)
  ) {
    return "American Express";
  } else {
    return false;
  }
};

const luhnAlgorithm = (cardNumber) => {
  const reversedCardNumber = cardNumber.split("").reverse();
  const shiftedFistElement = parseInt(reversedCardNumber.shift());
  const result = reversedCardNumber
    .map((el, i) => (i % 2 === 0 ? el * 2 : el))
    .map((el) => {
      if (el > 9) {
        const firstNum = Math.floor(el / 10);
        const secondNum = el % 10;
        return firstNum + secondNum;
      } else {
        return el;
      }
    })
    .reduce((acc, val) => acc + parseInt(val), 0);
  return (result + shiftedFistElement) % 10 === 0;
};

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
