const { body, validationResult } = require("express-validator");

const is18 = [
  body("age").isInt({min:18, max:110}).withMessage("We can not validate your user. They are below 18 years of age"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json(errors);
    }
    next();
  }
]

module.exports = is18;