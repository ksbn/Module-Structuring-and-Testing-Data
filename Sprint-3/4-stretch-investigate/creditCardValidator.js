/**
* The function checks whether the credit card is valid.
 * @param {string} cardNumber - card number in string
 * @returns {boolean} - true, if card is valid, otherwise false
 */
function validateCreditCard(cardNumber) {
  // Check, if card number consists from 16 numbers
  if (!/^\d{16}$/.test(cardNumber)) {
    return false;
  }

  // Check if there is at least two different numbers
  const digitsSet = new Set(cardNumber);
  if (digitsSet.size < 2) {
    return false;
  }

  // Check if the last number is even
  const lastDigit = parseInt(cardNumber[15], 10);
  if (lastDigit % 2 !== 0) {
    return false;
  }

  // We check that the sum of all digits is greater than 16.
  const sum = cardNumber.split("").reduce((acc, digit) => acc + parseInt(digit, 10), 0);
  if (sum <= 16) {
    return false;
  }

  // If all conditions are met, we return true
  return true;
}

module.exports = validateCreditCard;
