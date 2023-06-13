const e = require("express");
const messages = require("../../../config/messages");
const {
  generateRandomString,
  generatePasswordHash,
  generateUUID,
} = require("../../helpers/string");
const { Admin, WidgetPackages } = require("../../models");

const saveAdmin = async (adminData) => {
  const { name, email, picture } = adminData;
  let admin = await Admin.findOne({ email: email });
  if (admin) {
    // If the user exists, update their information
    admin.email = email;
    admin.username = name;
    admin.picture = picture;
    await admin.save();
    return {
      message: messages?.updated,
    };
  } else {
    // If the admin doesn't exist, create a new Admin object and save it to the database
    admin = new Admin({ email: email, username: name, picture: picture });
    await admin.save();
    return {
      message: messages?.created,
    };
  }
};

const findAdminDetails = async (email, phone) => {
  let admin;

  if (email) admin = await Admin.findOne({ email: email });
  if (phone) admin = await Admin.findOne({ phone: phone });

  return admin;
};

const addDepartment = async (department, email) => {
  const id = generateRandomString(20);
  const alreadyExist = await Admin.findOne({
    email,
    "department.name": department,
  });
  if (!alreadyExist) {
    await Admin.updateOne(
      { email: email },
      { $push: { department: { id: id, name: department } } },
    );
  } else {
    throw new Error(`Deparment ${messages?.alreadyExist}`);
  }
};

const checkPackage = async (email) => {
  const admin = await Admin.findOne({ email: email });
  const package = await WidgetPackages.findById(admin?.packageId);

  if (
    admin?.department?.length <= package?.numberOfDepartments &&
    admin?.agents?.length <= package?.numberOfUsers
  )
    return true;
};

const updateDepartment = async (data) => {
  await Admin.updateOne(
    { "department.id": data.id },
    { $set: { "department.$.name": data.name } },
  );
};

const addAgent = async (data, email) => {
  const alreadyExist = await Admin.findOne({
    email,
    "agents.username": data.username,
  });
  if (!alreadyExist) {
    const Id = await generateUUID();
    const bcryptPassword = await generatePasswordHash(data.password);

    data.id = Id;
    data.Status = "active";
    data.password = bcryptPassword;

    await Admin.updateOne({ email: email }, { $push: { agents: data } });
  } else {
    throw new Error(`Username ${messages?.alreadyExist}`);
  }
};

const setPasswordAndUserName = async (data, email) => {
  const bcryptPassword = await generatePasswordHash(data?.password);
  let alreadyExist = false;
  if (data?.newName) {
    alreadyExist = await Admin.findOne({
      email,
      "agents.username": data?.newName,
    });
  }
  if (!alreadyExist) {
    await Admin.updateOne(
      { "agents.id": data.id },
      {
        $set: {
          "agents.$.password": bcryptPassword,
          "agents.$.username": data?.newName || data?.oldName,
        },
      },
    );
  } else {
    throw new Error(`Username ${messages?.alreadyExist}`);
  }
};

const updateStatus = async (obj) => {
  if (obj?.agentId) {
    await Admin.updateOne(
      { "agents.id": obj?.agentId },
      { $set: { "agents.$.Status": obj?.status } },
    );
  }
};

module.exports = {
  addDepartment,
  checkPackage,
  updateDepartment,
  addAgent,
  setPasswordAndUserName,
  updateStatus,
  saveAdmin,
  findAdminDetails
};
