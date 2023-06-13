import { configureStore, Reducer } from "@reduxjs/toolkit";
import {
  connectRouter,
  routerMiddleware,
  RouterState,
} from "connected-react-router";
import userReducer from "./slices/user";
import history from "../utils/history";

export const store = configureStore({
  reducer: {
    router: connectRouter(history) as Reducer<RouterState<any>>,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(routerMiddleware(history)),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
