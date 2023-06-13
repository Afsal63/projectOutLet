const {
  STATUS_ACTIVE,
  STATUS_INACTIVE,
  STATUS_SUSPENDED,
  STATUS_DISABLED,
  USER_MODE_INDIVIDUAL,
  USER_MODE_BUSINESS,
  STATUS_PENDING,
  REFERRAL_CODE_LENGTH,
} = require("../../config/constants");
const uniqueValidator = require("mongoose-unique-validator");
const messages = require("../../config/messages");
// const fileSchema = require("./schema/file");
const { generateRandomString } = require("../helpers/string");

module.exports = (mongoose, collectionName) => {
  const schema = mongoose.Schema(
    {
      firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
      },
      email: {
        type: String,
        required: true,
        unique: true,
        sparse: true,
        uniqueCaseInsensitive: true,
        lowercase: true,
      },
      role: {
        type: String,
        required: true,
      },
      mode: {
        type: String,
        required: true,
        enum: [USER_MODE_INDIVIDUAL, USER_MODE_BUSINESS],
        default: USER_MODE_INDIVIDUAL,
      },
      rateAlert: { type: Boolean, default: false },
      isArchived: {
        type: Boolean,
        default: false,
      },
      kycDocuments: [
        {
          type: { type: String, default: "" },
          subType: { type: String, default: "" },
          //   file: fileSchema,
          isVerified: { type: Boolean, default: false },
          uploadedAt: { type: Date, default: "" },
        },
      ],
      kycStatus: {
        type: String,
        default: STATUS_PENDING,
      },
      kycApprovedBy: {
        type: String,
      },
      kycRejectedBy: {
        type: String,
      },
      kycApprovedAt: {
        type: Date,
        default: "",
      },
      kycRejectedAt: {
        type: Date,
        default: "",
      },
      phoneNumber: {
        type: String,
        unique: true,
        sparse: true,
        uniqueCaseInsensitive: true,
      },
      password: {
        type: String,
        default: "",
      },
      otp: {
        type: Number,
        default: "",
      },
      status: {
        type: Number,
        required: true,
        enum: [
          STATUS_ACTIVE,
          STATUS_INACTIVE,
          STATUS_SUSPENDED,
          STATUS_DISABLED,
        ],
        default: STATUS_ACTIVE,
      },
      resetPasswordToken: {
        type: String,
        default: "",
      },
      referralCode: {
        type: String,
        default: "",
      },
      totalBonusPoints: {
        type: Number,
        default: 0,
      },
      referrerCode: {
        type: String,
        default: "",
      },
      code: {
        type: String,
        default: "",
      },
    },
    {
      timestamps: true,
    },
  );
  schema.index({
    firstName: "text",
    lastName: "text",
    phoneNumber: "text",
    email: "text",
  });
  schema.plugin(uniqueValidator, { message: messages?.fieldIsUnique });
  schema.pre("save", async function (next) {
    const user = this;
    if (user.isNew) {
      let code = "";
      let codeExist = false;
      do {
        code = generateRandomString(REFERRAL_CODE_LENGTH);
        codeExist = await User.findOne({ referralCode: code });
      } while (codeExist);
      user.referralCode = code;
    }
    next();
  });

  schema.index({ firstName: "text", role: "text" });
  const User = mongoose.model("User", schema, collectionName);
  return User;
};
