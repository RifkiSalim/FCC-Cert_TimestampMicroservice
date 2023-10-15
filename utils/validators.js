function isDateValid(dateStr) {
  // Check if the input can be successfully parsed as a Date object or if it's a valid Unix timestamp
  const isValid = !isNaN(new Date(dateStr)) || !isNaN(Number(dateStr));
  return isValid;
}

module.exports = {
  isDateValid,
};
