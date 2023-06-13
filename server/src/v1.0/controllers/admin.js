const jwtDecode = require("jwt-decode");
const bcrypt = require("bcrypt");
const messages = require("../../config/messages");
const {
  addDepartment,
  checkPackage,
  updateDepartment,
  addAgent,
  setPasswordAndUserName,
  updateStatus,
  saveAdmin,
  findAdminDetails,
} = require("../services/internal/admin");
const {
  generatePayload,
  generateTokens,
} = require("../services/internal/auth");

const saveAdminDetails = async (req) => {
  const token = req?.body?.token;
  let adminObject = jwtDecode(token);
  if (adminObject) {
    const response = await saveAdmin(adminObject);
    return {
      message: response.message,
    };
  } else {
    throw new Error(messages?.invalidToken);
  }
};

const adminSignIn = async (req) => {
  const admin = await findAdminDetails(req?.body?.email, req?.body?.phone); // email or phone number is needed
  const checkPassword = await bcrypt.compare(
    req?.body?.password,
    admin?.password
  );

  if (!checkPassword) throw new Error(messages?.passwordError);

  if (admin) {
    const payload = await generatePayload(admin);
    const { accessToken, refreshToken } = await generateTokens(
      payload,
      req?.headers
    );
    return {
      message: messages?.loggedIn,
      token: { accessToken, refreshToken },
    };
  }
};

const createDepartment = async (req) => {
  const token = req.headers?.token?.split(" ")[1];
  const jwt = jwtDecode(token);
  const result = await checkPackage(jwt?.email);
  if (result) {
    await addDepartment(req?.body?.department, jwt?.email);
  } else {
    throw new Error(messages?.packageLimitReached);
  }
};

const editDepartment = async (req) => {
  await updateDepartment(req?.body);
};

const createAgent = async (req) => {
  const token = req.headers?.token?.split(" ")[1];
  const jwt = jwtDecode(token);
  const result = await checkPackage(jwt?.email);
  if (result) {
    await addAgent(req?.body, jwtEmail);
  } else {
    throw new Error(messages?.packageLimitReached);
  }
};

const updatePasswordAndUserName = async (req) => {
  const token = req.headers?.token?.split(" ")[1];
  const jwt = jwtDecode(token);
  await setPasswordAndUserName(req?.body, jwt?.email);
};

const deleteAgent = async (req) => {
  const obj = {};
  obj.agentId = req?.params?.id;
  obj.status = req?.params?.status;
  await updateStatus(obj);
};

module.exports = {
  createDepartment,
  editDepartment,
  saveAdminDetails,
  createAgent,
  updatePasswordAndUserName,
  deleteAgent,
  adminSignIn,
};
