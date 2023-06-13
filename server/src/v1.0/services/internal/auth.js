const bcrypt = require("bcrypt");
const {
  NotFoundException,
  BadRequestException,
} = require("../../../utils/customExceptions");
const config = require("../../../config");
const {
  STATUS_SUSPENDED,
  ROUTE_RESET_PASSWORD,
  STATUS_ACTIVE,
  NO,
  YES,
} = require("../../../config/constants");
const messages = require("../../../config/messages");
const {
  getUserByEmail,
  getUserRoleByMatch,
  getUserById,
  createOrUpdateUserDevice,
  updateUserDeviceByMatch,
} = require("./user");
const { Customer } = require("../../models");
// const { getRoleById } = require("./role");
const {
  generateJwtToken,
  generatePasswordHash,
  generateUUID,
} = require("../../helpers/string");
// const {
//   sendResetPasswordLinkEmail,
//   sendResetPasswordSuccessEmail,
// } = require("./email");

const authenticateByEmail = async (email) => {
  const user = await getUserByEmail(email);
  if (!user) throw new NotFoundException(messages?.userNotFound);
  return user;
};

const validatePassword = async (inputPassword, encryptedPassword) => {
  const validPass = await bcrypt.compare(
    inputPassword,
    encryptedPassword || ""
  );
  if (!validPass) throw new NotFoundException(messages?.invalidUserPass);
  return true;
};

const checkUserStatus = async (user) => {
  const { status } = user;
  if (status === STATUS_ACTIVE) return true;
  if (status === STATUS_SUSPENDED)
    throw new NotFoundException(messages?.suspendedAccount);
  throw new NotFoundException(messages?.inactiveAccount);
};

const getActiveRole = async (user) => {
  const userRole = await getUserRoleByMatch({
    userId: user._id,
    isActive: true,
  });
  if (!userRole) throw new NotFoundException(messages?.hasNoRole);
  const role = await getRoleById(userRole.roleId);
  if (!role) throw new NotFoundException(messages?.hasNoRole);
  return role;
};

const generatePayload = async (user, role) => {
  return {
    userId: user?.id || user?._id,
    // role: role?.name,
    phone: user?.phone,
    email: user?.email,
    sessionId: await generateUUID(),
  };
};

const generateAccessToken = async (payload) => {
  return generateJwtToken(payload, config?.accessTokenSecret, {
    expiresIn: config?.jwtTokenExpiresIn,
  });
};

const generateRefreshToken = async (payload, headers) => {
  const { userId, sessionId } = payload;
  const { "device-id": deviceId = "", "app-type": appType = "" } = headers;
  const refreshToken = await generateJwtToken(
    payload,
    config?.refreshTokenSecret,
    {
      expiresIn: config?.jwtRefreshTokenExpiresIn,
    }
  );
  const deviceData = {
    userId,
    deviceId,
    appType,
    sessionId,
    refreshToken,
    isActive: YES,
  };
  // await createOrUpdateUserDevice(deviceData);
  return refreshToken;
};

const generateTokens = async (payload, headers) => {
  const [accessToken, refreshToken] = await Promise.all([
    generateAccessToken(payload),
    generateRefreshToken(payload, headers),
  ]);
  return { accessToken, refreshToken };
};

const getProfile = async (userId) => {
  return await getUserById(userId, "firstName lastName email phoneNumber");
};

const generateResetPasswordToken = async (payload) => {
  return generateJwtToken(payload, config?.resetPasswordTokenSecret, {
    expiresIn: config?.jwtResetPasswordTokenExpiresIn,
  });
};

const generateResetPasswordLink = (user) => {
  let link = `${config?.app?.passwordRecoveryUrl}${ROUTE_RESET_PASSWORD}`;
  return link.replace("{token}", user?.resetPasswordToken);
};

const sendResetPasswordLink = async (user) => {
  const resetPasswordToken = await generateResetPasswordToken({
    email: user?.email,
  });
  user.resetPasswordToken = resetPasswordToken;
  await user.save();

  // send reset password link
  sendResetPasswordLinkEmail(user?.email, {
    user,
    resetPasswordLink: generateResetPasswordLink(user),
  });
};

const logoutFromUserDevice = async (user, headers) => {
  const { "device-id": deviceId = "", "app-type": appType = "" } = headers;
  await updateUserDeviceByMatch(
    {
      userId: user?._id,
      deviceId,
      appType,
    },
    { isActive: NO }
  );
  return true;
};

const generateTokenHeaders = ({ accessToken, refreshToken }) => {
  return {
    "Auth-Access-Token": accessToken,
    "Auth-Refresh-Token": refreshToken,
  };
};

const handleAuthenticate = async (data, headers) => {
  // const user = await authenticateByEmail(data?.username);
  // await validatePassword(data?.password, user?.password);
  // await checkUserStatus(user);
  // const role = await getActiveRole(user);
  // const payload = await generatePayload(user, role);
  // const tokens = await generateTokens(payload, headers);
  // const profile = await getProfile(payload?.userId);
  return {
    headers: generateTokenHeaders(tokens),
    data: {},
    // data: { role: payload?.role, profile },
  };
};

const handleForgotPassword = async (data) => {
  const user = await authenticateByEmail(data?.email);
  await checkUserStatus(user);
  await sendResetPasswordLink(user);
};

const validateResetPassword = (data) => {
  if (data?.newPassword !== data?.confirmPassword) return false;
  return true;
};

const handleResetPassword = async (data) => {
  const validated = validateResetPassword(data);
  if (!validated) throw new BadRequestException(messages?.passwordNotMatching);
  const user = await getUserByEmail(data?.email);
  user.password = await generatePasswordHash(data?.newPassword);
  user.resetPasswordToken = "";
  await user.save();

  // send password changed mail
  sendResetPasswordSuccessEmail(user?.email, { user });
};

const handleRefreshToken = async (data, headers) => {
  const user = await authenticateByEmail(data?.email);
  await checkUserStatus(user);
  const role = await getActiveRole(user);
  const payload = await generatePayload(user, role);
  const tokens = await generateTokens(payload, headers);
  return { headers: generateTokenHeaders(tokens) };
};

const handleLogout = async (user, headers) => {
  await logoutFromUserDevice(user, headers);
  return true;
};

const handleAutoLogin = async (user, headers) => {
  const role = await getActiveRole(user);
  const payload = await generatePayload(user, role);
  const tokens = await generateTokens(payload, headers);
  const profile = await getProfile(payload?.userId);
  return {
    headers: generateTokenHeaders(tokens),
    data: { role: payload?.role, profile },
  };
};

const registerGuest = async (data) => {
  const { phoneNumber,otp } = data;
  const existingUser = await Customer.findOne({ phoneNumber });
  if (!existingUser) {
    const customer = new Customer({
      phoneNumber,
      otp:'1234',
    });
    await customer.save();
    return {
      messages: messages?.otpSend
    }
  }
  else {
    throw new Error(`${phoneNumber} ${messages?.alreadyExist}`);
  }
  
}

const verifyOtp = async (data) => {
  const { mobileNumber, otp } = data
  const user = await Customer.findOne({ mobileNumber });
  if(user) {
    if(user.otp === otp) {
      return {
        messages: messages?.otpVerified
      }
    }else {
      return {
        messages: messages?.otpNotMatch
      }
    }
  }else{
    throw new Error(`User ${messages?.notFound}`);
  }

  
}


module.exports = {
  handleAuthenticate,
  handleForgotPassword,
  handleResetPassword,
  handleRefreshToken,
  handleLogout,
  handleAutoLogin,
  registerGuest,
  verifyOtp,
  generatePayload,
  generateTokens
};
