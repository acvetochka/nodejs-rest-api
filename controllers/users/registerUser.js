const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");
const { nanoid } = require("nanoid");

const { User } = require("../../models/user");
// const { HttpError, sendEmail, verifyEmail } = require("../../helpers");
const { HttpError } = require("../../helpers");
// const loginUser = require("./loginUser");

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  const hash = await bcrypt.hash(password, 10);
  const verificationToken = nanoid();

  const user = await User.findOne({ email });
  console.log(user);

  if (user) {
    throw HttpError(409, "Email in use");
  }

  const avatarURL = gravatar.url(email);

  const result = await User.create({
    ...req.body,
    password: hash,
    verificationToken,
  });
  console.log("result: ", result);

  // await sendEmail(verifyEmail(email, verificationToken));

  // const us = {
  //   email, password
  // }
  // const logUser = await loginUser(us)
  // console.log("logUser: ", logUser);

  // const {token} = logUser;

  res.status(201).json({
    user: {
      // token,
      name,
      email,
      subscription: result.subscription,
      avatarURL,
    },
  });
};

module.exports = registerUser;
