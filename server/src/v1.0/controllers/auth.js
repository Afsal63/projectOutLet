const messages = require("../../config/messages");
// const {
//   createUser,
//   getUserByMatch,
//   updateUserByMatch,
// } = require("../services/internal/user");
const {
  handleAuthenticate,
  registerGuest,
  verifyOtp,
  //   handleForgotPassword,
  //   handleResetPassword,
  //   handleRefreshToken,
  handleLogout,
} = require("../services/internal/auth");
// const { ROLE_CUSTOMER } = require("../../config/constants");

// const login = async (req) => {
//   // return { messages: "sasasd", headers: [], data: ["jhhghghvgv"] };
//   const { headers, data } = await handleAuthenticate(req?.body, req?.headers);
//   return { message: messages?.loggedIn, headers, data };
// };

const guestSignup = async (req) => {
  const { messages } = await registerGuest(req.body);
  return { message: messages };
};
const guestOtpverify = async (req) => {
  const { messages } = await verifyOtp(req.body);
  console.log("messages", messages);
  return { message: messages };
};

// const signUp = async (req) => {
//   const newUser = await createUser(req.body);
//   if (req?.body?.role === ROLE_CUSTOMER && req?.body?.refCode) {
//     const userMatched = await getUserByMatch({
//       referralCode: req?.body?.refCode,
//     });
//     if (userMatched) {
//       await updateUserByMatch(
//         { _id: newUser?._id },
//         { referrerCode: req?.body?.refCode }
//       );
//     }
//   }
//   return {
//     message: messages?.signUpSuccess,
//   };
// };

// const forgotPassword = async (req) => {
//   await handleForgotPassword(req?.body);
//   return { message: messages?.resetPasswordMailSent };
// };

// const resetPassword = async (req) => {
//   await handleResetPassword(req?.body);
//   return { message: messages?.passwordResetSuccess };
// };

// const refreshToken = async (req) => {
//   const { headers, data } = await handleRefreshToken(req?.body, req?.headers);
//   return { headers, data };
// };

const logout = async (req) => {
  await handleLogout(req?.user, req?.headers);
  return { message: messages?.logoutSuccess };
};

module.exports = {
  // login,
  guestSignup,
  guestOtpverify,
  //   signUp,
  //   forgotPassword,
  //   resetPassword,
  //   refreshToken,
  logout,
};
