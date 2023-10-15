const express = require("express");

const router = express.Router();
const validators = require("../utils/validators");

router.get("/:date?", (req, res) => {
  let dateToParse = null;
  const { date } = req.params;

  if (!date) {
    dateToParse = new Date().toString();
  } else {
    // Check if the date is a valid date string or a Unix timestamp
    const isUnixTimestamp = !isNaN(Number(date));
    const isValid = validators.isDateValid(date) || isUnixTimestamp;

    if (!isValid) {
      res.status(400).json({
        error: "Invalid Date",
      });
      return;
    }

    // Parse date as string or unix timestamp
    dateToParse = isUnixTimestamp ? parseInt(date) : date;
  }

  if (!dateToParse) {
    res.sendStatus(500);
    return;
  }

  // Init Date object
  const dateObj = new Date(dateToParse);

  // Properties
  const unix = dateObj.getTime();
  const gmt = dateObj.toUTCString();

  // Send response
  res.status(200).json({
    unix,
    utc: gmt,
  });
  return;
});

module.exports = router;
