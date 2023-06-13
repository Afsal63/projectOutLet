import service from "../utils/service";
import API from "../config/api";
import axios from "axios";
import { getDeviceId } from "../utils/functions";
import ROLES from "../config/roles";

const AuthService = {
  login: async (params: any = {}) => {
    try {
      const res = await service.post(API.LOGIN, params);
      if (res?.data?.data && res.data?.data?.role === ROLES.SUPER_ADMIN) {
        //JWT tokens are saved to localStorage
        localStorage.setItem(
          "auth-access-token",
          res?.headers["auth-access-token"],
        );
        localStorage.setItem(
          "auth-refresh-token",
          res?.headers["auth-refresh-token"],
        );
        localStorage.setItem("user", JSON.stringify(res?.data?.data));
      }
      return res?.data;
    } catch (error) {
      return error;
    }
  },
  register: async (params: any = {}) => {
    try {
      const res = await service.post(API.SIGNUP, params);
      if (res?.data) {
        return res.data;
      } else {
        throw new Error("something went wrong");
      }
    } catch (error) {
      return error;
    }
  },
  logout: async () => {
    try {
      const res = await service.post(API.LOGOUT);
      if (res?.data) {
        return res.data;
      } else {
        throw new Error("something went wrong");
      }
    } catch (error) {
      return error;
    }
  },
  forgotPassword: async (params: any = {}) => {
    try {
      const res = await service.post(API.FORGOT_PASSWORD, params);
      if (res?.data) {
        return res.data;
      } else {
        throw new Error("something went wrong");
      }
    } catch (error) {
      return error;
    }
  },
  resetPassword: async (params: any = {}, token: string) => {
    try {
      let res = await axios.post(
        `${process.env.REACT_APP_BASE_URL}${API.RESET_PASSWORD}`,
        params,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
            "Device-Id": (await getDeviceId()) || "",
            "App-Type": "web",
          },
        },
      );
      if (res.data) {
        return res.data;
      } else {
        throw new Error("something went wrong");
      }
    } catch (error) {
      return error;
    }
  },
  validateResetPassword: async (token: string) => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BASE_URL}${API.VALIDATE_RESET_PASSWORD}`,
        undefined,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
            "Device-Id": (await getDeviceId()) || "",
            "App-Type": "web",
          },
        },
      );
      if (res?.data) {
        return res.data;
      }
    } catch (error) {
      return error;
    }
  },
  refreshToken: async () => {
    try {
      //refresh token is fetched and added to header
      const token = localStorage.getItem("auth-refresh-token");
      const res = await axios.post(
        `${process.env.REACT_APP_BASE_URL}${API.REFRESH_TOKEN}`,
        undefined,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            Authorization: `Bearer ${token}`,
          },
        },
      );
      if (res?.data?.statusCode === 200) {
        //new JWT tokens are saved to localStorage
        localStorage.setItem(
          "auth-access-token",
          res?.headers["auth-access-token"],
        );
        localStorage.setItem(
          "auth-refresh-token",
          res?.headers["auth-refresh-token"],
        );
        service.defaults.headers.common["Authorization"] =
          "Bearer " + res?.headers["auth-access-token"];
      }
      return res.data;
    } catch (error) {
      return error;
    }
  },
  getProfile: async () => {
    try {
      const res = await service.get(API.PROFILE);
      if (res?.data) {
        return res.data;
      } else {
        throw new Error("Something went wrong");
      }
    } catch (error) {
      return error;
    }
  },
};

export default AuthService;
