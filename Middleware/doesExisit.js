const { body, validationResult } = require("express-validator");

const doesExist = [
  body("firstName").exists().withMessage("First Name is missing"),
  body("lastName").exists().withMessage("Last Name is missing"),
  body("age").exists().withMessage("Age is missing"),
  body("fbw").exists().withMessage("Fbw is missing"),
  body("email").exists().withMessage("Email is missing"),
 (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json(errors);
    }
    next();}
  ]
module.exports = doesExist;