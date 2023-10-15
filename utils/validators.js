function isDateValid(dateStr) {
  const isValid = !isNaN(new Date(dateStr));
  return isValid;
}

module.exports = {
  isDateValid,
};
