const express = require("express");

const router = express.Router();
const validators = require("../utils/validators");

router.get("/:date?", (req, res) => {
  let dateToParse = null;
  // Extract Date
  const { date } = req.params;

  if (!date) {
    dateToParse = new Date().toString();
  } else {
    // check if date is valid
    const isValid = validators.isDateValid(date);

    if (!isValid) {
      res.status(400).json({
        error: "Invalid Date",
      });
      return;
    }

    // Date is valid, move on

    dateToParse = date;
  }
  if (!dateToParse) {
    res.sendStatus(500);
    return;
  }

  // Parse the Date into Unix and GMT
  const dateObj = new Date(dateToParse);
  const unix = dateObj.getTime();
  const gmt = dateObj.toUTCString();

  res.status(200).json({
    unix,
    utc: gmt,
  });
});

module.exports = router;
