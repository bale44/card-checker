export const cardName = (cardNumber) => {
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
