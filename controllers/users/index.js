const registerUser = require("./registerUser");
const loginUser = require("./loginUser");
const logoutUser = require("./logoutUser");
const getCurrentUser = require("./getCurrentUser");
const updateStatusUser = require("./updateStatusUser");
const verifyUser = require("./verifyUser");
const returnVerifyUser = require("./returnVerifyUser");
const updateAvatar = require("./updateAvatar");
const ctrlWrapper = require("../../helpers/ctrlWrapper");

module.exports = {
  registerUser: ctrlWrapper(registerUser),
  loginUser: ctrlWrapper(loginUser),
  logoutUser: ctrlWrapper(logoutUser),
  getCurrentUser: ctrlWrapper(getCurrentUser),
  updateStatusUser: ctrlWrapper(updateStatusUser),
  verifyUser: ctrlWrapper(verifyUser),
  returnVerifyUser: ctrlWrapper(returnVerifyUser),
  updateAvatar: ctrlWrapper(updateAvatar),
};
