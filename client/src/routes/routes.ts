import ROLES from "../config/roles";

export const PUBLIC = {
  BASE_PATH: "/",
  PAGES: {
    LANDING: "home",
  },
};

// AUTH
export const AUTH = {
  BASE_PATH: "/auth",
  PAGES: {
    LOGIN: "login",
    FORGOT_PASSWORD: "forgot-password",
    RESET_PASSWORD: "reset-password",
    OTP: "otp",
    SIGNIN: "signIn",
    SIGNUP: "signup",
  },
};

//PRIVATE
export const PRIVATE = {
  BASE_PATH: "/:userType",
  ADMIN: {
    ADMIN_BASE_PATH: ROLES.ADMIN,
    SUPER_ADMIN_BASE_PATH: ROLES.SUPER_ADMIN,
    PAGES: {
      INDEX: "dashboard",
      DASHBOARD: "dashboard",
      CALL_DETAILS: "call-details",
      CONTACTS: "contacts",
      KNOWLEDGE: "knowledge",
      REPORTS: "reports",
      ADMIN_VIEW: "admin-view",
      CALL_DETAILS_INDIVIDUAL:"call-details-individual"
    },
  },
};

export const ERROR = {
  ERROR_403: "/403",
  CATCH_ALL: "*",
};
