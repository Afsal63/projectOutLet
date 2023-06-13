enum API {
  LOGIN = "/auth/login",
  SIGNUP = "/auth/signup",
  LOGOUT = "/auth/logout",
  FORGOT_PASSWORD = "/auth/forgot-password",
  RESET_PASSWORD = "/auth/reset-password",
  VALIDATE_RESET_PASSWORD = "/auth/reset-password/validate",
  REFRESH_TOKEN = "/auth/token",
  PROFILE = "/user/profile",
}

const publicEndpoints = [
  API.FORGOT_PASSWORD,
  API.LOGIN,
  API.RESET_PASSWORD,
  API.LOGOUT,
  API.REFRESH_TOKEN,
  API.RESET_PASSWORD,
  API.SIGNUP,
  API.VALIDATE_RESET_PASSWORD,
];

export { publicEndpoints };

export default API;
