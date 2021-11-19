const { body } = require("express-validator");
const capitalize = require("../Helpers/capitalize");
const sortAlphabetical = require("../Helpers/sortAlphabetical");

const sanitizeUser = [
  (req, res, next) => {
    req.body.firstName = capitalize(req.body.firstName);
    req.body.lastName = capitalize(req.body.lastName);
    req.body.favoriteBands = sortAlphabetical(req.body.favoriteBands)
    next();
  },
  body("age").toInt(),
  body("fbw").toInt(),
];

module.exports = sanitizeUser;
