const { body, validationResult } = require("express-validator");

const isFbw = [
  body("fbw").contains(36).withMessage("We can not validate your user. They are not a member of FBW36"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json(errors);
    }
    next();
  }
]
module.exports = isFbw;