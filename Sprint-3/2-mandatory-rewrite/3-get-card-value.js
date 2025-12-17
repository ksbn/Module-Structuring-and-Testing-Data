function getCardValue(card) {
  // We obtain the rank: everything except the last character (which is the suit).
  const rank = card.slice(0, -1);

  // Ace
  if (rank === "A") return 11;

  // Face cards
  if (rank === "K" || rank === "Q" || rank === "J" || rank === "10") return 10;

  // Number cards 2-9
  const num = Number(rank);
  if (num >= 2 && num <= 9) return num;

  // Any other case is an error.
  throw new Error("Invalid card rank.");
}

module.exports = getCardValue;
