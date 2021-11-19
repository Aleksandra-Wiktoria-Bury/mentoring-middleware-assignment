const validate = (req, res) => {
  const { firstName, lastName, age, fbw, profession, favoriteBands, email } =
    req.body;
  const user = {
    firstName: firstName,
    lastName: lastName,
    age: age,
    fbw: fbw,
    profession: profession,
    favoriteBands: favoriteBands,
    email: email,
  };

  res.status(200).json({ message: "Success! User validated.", user: user });
};
const sanitize = (req, res) => {
 const { firstName, lastName, age, fbw, profession, favoriteBands, email } =
    req.body;
  const user = {
    firstName: firstName,
    lastName: lastName,
    age: age,
    fbw: fbw,
    profession: profession,
    favoriteBands: favoriteBands,
    email: email,
  };

  res.status(200).json({ message: "Success! User validated.", user: user });
};

module.exports = { validate, sanitize };
