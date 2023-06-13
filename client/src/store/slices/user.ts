import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import CryptoJS from "crypto-js";
import AuthService from "../../services/auth.service";
import { replace } from "connected-react-router";
import { AUTH, PRIVATE } from "../../routes/routes";
import { toast } from "react-toastify";
import ROLES from "../../config/roles";

export interface UserState {
  isAuthenticated: boolean;
  isAppInitialized: boolean;
  user: any;
  error: string;
  loading: boolean;
  profile: any;
  profileLoading: boolean;
}

export const initialState: UserState = {
  isAuthenticated: false,
  isAppInitialized: false,
  user: {},
  error: "",
  loading: false,
  profile: {},
  profileLoading: false,
};

export const login = createAsyncThunk(
  "user/login",
  async (params: any, { rejectWithValue, dispatch }) => {
    try {
      const response: any = await AuthService.login(params);
      if (response?.statusCode === 200 && response?.data) {
        if (params.rememberme) {
          localStorage.setItem(
            "login-data",
            CryptoJS.AES.encrypt(
              JSON.stringify(params),
              process.env.REACT_APP_PRIVATE_KEY || "iD@dmin2022"
            ).toString()
          );
        } else {
          localStorage.removeItem("login-data");
        }

        switch (response.data.role) {
          // case ROLES.SUPER_ADMIN:
          // dispatch(
          //   replace({
          //     pathname: PRIVATE.BASE_PATH.replace(
          //       ":userType",
          //       PRIVATE.ADMIN.SUPER_ADMIN_BASE_PATH,
          //     ),
          //   }),
          // );
          // break;
          case ROLES.ADMIN:
            dispatch(
              replace({
                pathname: PRIVATE.BASE_PATH.replace(
                  ":userType",
                  PRIVATE.ADMIN.ADMIN_BASE_PATH
                ),
              })
            );
            break;

          default:
            toast.error("Login is not permitted for this user.");
            return rejectWithValue("Login is not permitted for this user.");
        }
        return response;
      } else {
        throw new Error(response?.message || "");
      }
    } catch (err: any) {
      toast.error(err.message || "Something went wrong!");
      return rejectWithValue(err.message || "Something went wrong");
    }
  }
);

export const logout = createAsyncThunk(
  "user/logout",
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const response = await AuthService.logout();
      if (response.statusCode === 200 || response.statusCode === 401) {
        // localStorage.clear();
        localStorage.removeItem("auth-access-token");
        localStorage.removeItem("auth-refresh-token");
        localStorage.removeItem("user");
        dispatch(replace(AUTH.BASE_PATH));
        return true;
      } else {
        throw new Error(response?.message || "");
      }
    } catch (err: any) {
      toast.error(err.message || "Something went wrong!");
      return rejectWithValue(err.message || "Something went wrong");
    }
  }
);

export const checkAuthorization = createAsyncThunk(
  "user/checkAuthorization",
  (_, { dispatch, rejectWithValue }) => {
    try {
      //for new sessions is token is available user will be logged in automatically
      const tmpAT = localStorage.getItem("auth-access-token") ?? "";
      const tmpRT = localStorage.getItem("auth-refresh-token") ?? "";
      const tmpUserStr = localStorage.getItem("user") ?? "";
      if (tmpAT && tmpRT && tmpUserStr) {
        let usr = JSON.parse(tmpUserStr);
        return usr;
      } else {
        return rejectWithValue("No token found");
        // throw new Error();
      }
    } catch (err: any) {
      rejectWithValue(err.message || "Something went wrong");
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    clearError(state) {
      state.error = "";
    },
    createGoogleUser(state, action) {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.isAppInitialized = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(checkAuthorization.pending, (state) => {
      state.isAuthenticated = false;
      state.isAppInitialized = false;
    });
    builder.addCase(checkAuthorization.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.isAppInitialized = true;
    });
    builder.addCase(checkAuthorization.rejected, (state) => {
      state.user = {};
      state.isAuthenticated = false;
      state.isAppInitialized = true;
    });
    builder.addCase(login.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload.data || {};
      state.error = "";
      state.isAuthenticated = true;
      state.isAppInitialized = true;
      state.loading = false;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.error = (action?.payload as string) || "";
      state.isAppInitialized = true;
      state.isAuthenticated = false;
      state.loading = false;
    });
    builder.addCase(logout.fulfilled, (state) => {
      state.isAuthenticated = false;
      state.user = {};
      state.profile = {};
    });
    builder.addCase(logout.rejected, (state) => {
      state.error = "something went wrong";
    });
  },
});

export const { clearError, createGoogleUser } = userSlice.actions;
export default userSlice.reducer;
