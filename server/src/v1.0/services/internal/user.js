const {
  CODE_EMAIL_EXISTS,
  CODE_PHONE_NUMBER_EXISTS,
} = require("../../../config/constants");
const messages = require("../../../config/messages");
const { generateUUID } = require("../../helpers/string");
const { User, UserRole, UserDevice, Tickets } = require("../../models");

const createSuperAdmin = () => {};

// const {
//   sendSignUpCompletedEmail,
//   sendUserSignUpEmailtoAdmin,
// } = require("./email");
// const { getRoleByName, getRoleById } = require("./role");

// const createUser = async (data) => {
//   const password = data?.password ?? (await generateRandomPassword());
//   data.password = await generatePasswordHash(password);
//   const user = await new User(data).save();
//   const role = await getRoleByName(data?.role);
//   await createUserRole({ userId: user?.id, roleId: role?.id });

//   // send welcome mail
//   sendSignUpCompletedEmail(user?.email, { user, password });

//   // send mail to admin
//   sendUserSignUpEmailtoAdmin(process?.env?.SUPERADMIN_EMAIL, {
//     user: {
//       firstName: data?.firstName,
//       lastName: data?.lastName,
//       email: user?.email,
//       phoneNumber: data?.phoneNumber,
//       role: data?.role,
//     },
//   });
//   return user;
// };

// const getUserById = async (id, select = null) => {
//   return await User.findById(id).select(select);
// };

const getUserByMatch = async (match, select = null) => {
  return await User.findOne(match).select(select);
};

const getUserByEmail = async (email, select = null) => {
  return await getUserByMatch({ email: new RegExp(`^${email}$`, "i") }, select);
};

// const getUserByPhoneNumber = async (phoneNumber, select = null) => {
//   return await getUserByMatch({ phoneNumber }, select);
// };

// const createUserRole = async (data) => {
//   return await new UserRole(data).save();
// };

// const getUserRoleByMatch = async (match) => {
//   return await UserRole.findOne(match);
// };

// const createUserDevice = async (data) => {
//   return await new UserDevice(data).save();
// };

// const updateUserDeviceByMatch = async (match, data) => {
//   return await UserDevice.updateOne(match, { $set: data });
// };

const updateUserDeviceByMatch = async (match, data) => {
  return await User.updateOne(match, { $set: data });
};

// const createOrUpdateUserDevice = async (data) => {
//   const { userId, deviceId, appType, ...rest } = data;
//   const match = { userId, deviceId, appType };
//   const device = await getUserDeviceByMatch(match);
//   return !device
//     ? await createUserDevice(data)
//     : await updateUserDeviceByMatch(match, rest);
// };

// const getUserDeviceByMatch = async (match) => {
//   return await UserDevice.findOne(match);
// };

// const generateRandomPassword = async () => {
//   var password = Math.random().toString(36).slice(-8);
//   return password;
// };

// const verifyUser = async (data, user) => {
//   const checkUserEmail = await getUserByEmail(data.email);
//   if (checkUserEmail && checkUserEmail.email != user?.email) {
//     return {
//       data: { code: CODE_EMAIL_EXISTS },
//       message: messages?.emailRegistered,
//     };
//   }
//   const checkUserPhoneNumber = await getUserByPhoneNumber(data.phoneNumber);
//   if (
//     checkUserPhoneNumber &&
//     checkUserPhoneNumber?.phoneNumber != user?.phoneNumber
//   ) {
//     return {
//       data: { code: CODE_PHONE_NUMBER_EXISTS },
//       message: messages?.phoneNumberRegistered,
//     };
//   }
//   return false;
// };

// const updateUserDocument = async (condition, data) => {
//   const user = await User.findOneAndUpdate(
//     condition,
//     { $set: data },
//     { new: true }
//   );
//   return user;
// };

// const checkUserDocumentExist = async (id, data) => {
//   const user = await getUserById(id);
//   const documents = user.kycDocuments;
//   const fileType = documents.find((o) => o.type === data.type);
//   if (fileType) {
//     return fileType;
//   }
//   return false;
// };

// const updateUserByMatch = async (condition, data) => {
//   const user = await User.findOneAndUpdate(condition, data, { new: true });
//   return user;
// };

// const getUserRoleByUserId = async (id) => {
//   const userRole = await getUserRoleByMatch({ userId: id });
//   const role = await getRoleById(userRole.roleId);
//   return role;
// };

// const getAllUsers = async (queryBuilder, defaultCondition) => {
//   const [users, total] = await Promise.all([
//     User.find(queryBuilder.getFindQuery(defaultCondition))
//       .select("-password -resetPasswordToken -kycDocuments")
//       .sort(queryBuilder.getSortQuery())
//       .limit(queryBuilder.getPagination().limit)
//       .skip(queryBuilder.getPagination().skip),
//     User.countDocuments(queryBuilder.getFindQuery(defaultCondition)),
//   ]);
//   return { users, total };
// };

// const ticket = async (req) => {
//   const id = generateRandomString(20);
//   const alreadyExist = await Admin.findOne({ "department.name": department });
//   if (!alreadyExist) {
//     await Admin.updateOne(
//       { email: email },
//       { $push: { department: { id: id, name: department } } }
//     );
//   } else {
//     throw new Error(`Deparment ${messages?.alreadyExist}`);
//   }
// };

const ticket = async (data) => {
  const id = await generateUUID();
  data.ticketNumber = id;
  await Tickets(data).save();
};

module.exports = {
  ticket,
  createSuperAdmin,
  //   createUser,
  //   getUserById,
  getUserByEmail,
  //   getUserByPhoneNumber,
  //   getUserByMatch,
  //   createUserRole,
  //   getUserRoleByMatch,
  //   createOrUpdateUserDevice,
  //   getUserDeviceByMatch,
  updateUserDeviceByMatch,
  //   verifyUser,
  //   updateUserDocument,
  //   checkUserDocumentExist,
  //   updateUserByMatch,
  //   getUserRoleByUserId,
  //   getAllUsers,
};
