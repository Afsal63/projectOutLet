const jwt = require("jsonwebtoken");
const config = require("../../config");
const {
  STATUS_ACTIVE,
  YES,
  ROLE_ADMIN,
  ROLE_CUSTOMER,
  ROLE_AGENT,
  ROLE_PARTNER,
  ROLE_STAFF,
} = require("../../config/constants");
const { UnauthorizedException } = require("../../utils/customExceptions");
const {
  getUserByMatch,
  getUserDeviceByMatch,
  getUserRoleByMatch,
  getUserById,
} = require("../services/internal/user");
// const { getRoleByName } = require("../services/internal/role");

// get token from authorization header
const getBearerToken = async (headers) => {
  const authHeader = headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  return token;
};

const verifyResetPasswordToken = async (token) => {
  let payload;
  try {
    payload = jwt.verify(token, config?.resetPasswordTokenSecret);
  } catch (error) {
    payload = null;
  }
  if (!payload) throw new UnauthorizedException();
  const user = await getUserByMatch({
    resetPasswordToken: token,
    email: payload?.email,
  });
  if (!user) throw new UnauthorizedException();
  return payload;
};

const verifyAccessToken = async (token) => {
  if (!token) throw new UnauthorizedException();
  let payload;
  try {
    payload = jwt.verify(token, config?.accessTokenSecret);
  } catch (error) {
    payload = null;
  }
  if (!payload) throw new UnauthorizedException();
  return payload;
};

const verifyRefreshToken = async (token) => {
  let payload;
  try {
    payload = jwt.verify(token, config?.refreshTokenSecret);
  } catch (error) {
    payload = null;
  }
  if (!payload) throw new UnauthorizedException();
  return payload;
};

const verifyUserAccount = async (payload) => {
  const user = await getUserByMatch({
    _id: payload?.userId,
    email: new RegExp(`^${payload?.email}$`, "i"),
  });
  if (!user) throw new UnauthorizedException();
  await verifyUserStatus(user);
  return payload;
};

const verifyUserStatus = async (user) => {
  const { status } = user;
  if (status === STATUS_ACTIVE) return true;
  throw new UnauthorizedException();
};

const verifyUserRole = async (payload) => {
  const role = await getRoleByName(payload?.role);
  if (!role) throw new UnauthorizedException();
  const userRole = await getUserRoleByMatch({
    userId: payload?.userId,
    roleId: role?._id,
    isActive: YES,
  });
  if (!userRole) throw new UnauthorizedException();
  return payload;
};

const verifyUserDevice = async (headers, data) => {
  const { "device-id": deviceId, "app-type": appType } = headers;
  const { userId, sessionId } = data;
  const device = await getUserDeviceByMatch({
    userId,
    deviceId,
    appType,
    sessionId,
    isActive: YES,
  });
  if (!device) throw new UnauthorizedException();
  return data;
};

const setVerifiedUser = async (req, payload) => {
  req.body.email = payload?.email;
};

const setLoggedInUser = async (req, payload) => {
  req.user = await getUserById(
    payload?.userId,
    "firstName lastName email phoneNumber role status"
  );
};

const isValidResetPasswordToken = async (req, res, next) => {
  getBearerToken(req?.headers)
    .then(verifyResetPasswordToken)
    .then((payload) => setVerifiedUser(req, payload))
    .then(next)
    .catch(next);
};

const isUserAuthenticated = async (req, res, next) => {
  getBearerToken(req?.headers)
    .then(verifyAccessToken)
    .then((payload) => verifyUserAccount(payload))
    .then((payload) => verifyUserRole(payload))
    .then((payload) => verifyUserDevice(req?.headers, payload))
    .then((payload) => setLoggedInUser(req, payload))
    .then(next)
    .catch(next);
};

const ifUserAuthenticated = async (req, res, next) => {
  getBearerToken(req?.headers)
    .then(verifyAccessToken)
    .then((payload) => verifyUserAccount(payload))
    .then((payload) => verifyUserRole(payload))
    .then((payload) => verifyUserDevice(req?.headers, payload))
    .then((payload) => setLoggedInUser(req, payload))
    .then(next)
    .catch(() => {
      next();
    });
};

const isValidRefreshToken = async (req, res, next) => {
  getBearerToken(req?.headers)
    .then(verifyRefreshToken)
    .then((payload) => verifyUserDevice(req?.headers, payload))
    .then((payload) => setVerifiedUser(req, payload))
    .then(next)
    .catch(next);
};

const isAdminUser = async (req, res, next) => {
  const payload = { userId: req?.user?._id, role: ROLE_ADMIN };
  verifyUserRole(payload)
    .then(() => {
      next();
    })
    .catch(next);
};

const isStaffUser = async (req, res, next) => {
  const payload = { userId: req?.user?._id, role: ROLE_STAFF };
  verifyUserRole(payload)
    .then(() => {
      next();
    })
    .catch(next);
};

const isCustomerUser = async (req, res, next) => {
  const payload = { userId: req?.user?._id, role: ROLE_CUSTOMER };
  verifyUserRole(payload)
    .then(() => {
      next();
    })
    .catch(next);
};

const isAgentUser = async (req, res, next) => {
  const payload = { userId: req?.user?._id, role: ROLE_AGENT };
  verifyUserRole(payload)
    .then(() => {
      next();
    })
    .catch(next);
};

const isPartnerUser = async (req, res, next) => {
  const payload = { userId: req?.user?._id, role: ROLE_PARTNER };
  verifyUserRole(payload)
    .then(() => {
      next();
    })
    .catch(next);
};

const hasStaffAccess = async (req, res, next) => {
  const verifyAdminRole = verifyUserRole({
    userId: req?.user?._id,
    role: ROLE_ADMIN,
  });
  const verifyStaffRole = verifyUserRole({
    userId: req?.user?._id,
    role: ROLE_STAFF,
  });
  Promise.any([verifyAdminRole, verifyStaffRole])
    .then(() => {
      next();
    })
    .catch(() => {
      next(new UnauthorizedException());
    });
};

module.exports = {
  isValidResetPasswordToken, // authentication for reset password
  isValidRefreshToken, // authentication for token refresh
  isUserAuthenticated, // authentication for user identity
  ifUserAuthenticated, // if authenticated, then load req.user with user details
  isAdminUser, // validate whether the user is a super admin
  isStaffUser, // validate whether the user is a admin/staff
  isCustomerUser, // validate whether the user is a customer
  isAgentUser, // validate whether the user is a agent
  isPartnerUser, // validate whether the user is a channel partner
  hasStaffAccess, // validate whether the user has access to staff permissions
};
