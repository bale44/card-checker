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

export default luhnAlgorithm;
