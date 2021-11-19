const validate = (req, res) => {
  const { firstName, lastName, age, fbw, profession, favouriteBands, email } =
    req.body;
  const user = {
    firstName: firstName,
    lastName: lastName,
    age: age,
    fbw: fbw,
    profession: profession,
    favourteBands: favouriteBands,
    email: email,
  };

  res.status(200).json({ message: "Success! User validated.", user: user });
};
const sanitize = (req, res) => {
  res.status(200).json("Sanitize route");
};

module.exports = { validate, sanitize };
