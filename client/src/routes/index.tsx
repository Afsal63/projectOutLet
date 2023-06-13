import React, { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { PUBLIC, PRIVATE, ERROR, AUTH } from "./routes";
import { useAppSelector } from "../store/hooks";

import Loader from "../components/common/loader";

const PublicLayout = lazy(() => import("../layouts/publicLayout"));
const AuthLayout = lazy(() => import("../layouts/authLayout"));
const AdminLayout = lazy(() => import("../layouts/adminLayout"));

const Landing = lazy(() => import("../pages/public/landing"));

const Login = lazy(() => import("../pages/auth/login"));
const Otp = lazy(() => import("../pages/auth/otp"));
const WelcomeBack = lazy(() => import("../pages/auth/welcomeBack"));
const Signup = lazy(() => import("../pages/auth/signup"));

const Dashboard = lazy(() => import("../pages/admin/dashboard"));
const CallDetails = lazy(() => import("../pages/admin/callDetails"));
const CallUserDetails = lazy(() => import("../pages/admin/callUserDetails"));

const Error = lazy(() => import("../pages/common/Error"));

const MainRoute: React.FC<any> = () => {
  const { isAppInitialized } = useAppSelector((state: any) => state.user);

  if (!isAppInitialized) {
    return <Loader />;
  }

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {/* Public Routes */}
        <Route path={PUBLIC.BASE_PATH} element={<PublicLayout />}>
          <Route
            path={PUBLIC.PAGES.LANDING}
            element={
              <Suspense fallback={<Loader />}>
                <Landing />
              </Suspense>
            }
          />

          <Route index element={<Navigate to={PUBLIC.PAGES.LANDING} />} />
        </Route>

        {/* Auth Routes */}
        <Route path={AUTH.BASE_PATH} element={<AuthLayout />}>
          <Route
            path={AUTH.PAGES.LOGIN}
            element={
              <Suspense fallback={<Loader />}>
                <Login />
              </Suspense>
            }
          />

          <Route
            path={AUTH.PAGES.OTP}
            element={
              <Suspense fallback={<Loader />}>
                <Otp />
              </Suspense>
            }
          />

          <Route
            path={AUTH.PAGES.SIGNIN}
            element={
              <Suspense fallback={<Loader />}>
                <WelcomeBack />
              </Suspense>
            }
          />

          <Route
            path={AUTH.PAGES.SIGNUP}
            element={
              <Suspense fallback={<Loader />}>
                <Signup />
              </Suspense>
            }
          />

          <Route index element={<Navigate to={AUTH.PAGES.LOGIN} />} />
        </Route>

        {/* Admin Routes */}
        <Route path={PRIVATE.ADMIN.ADMIN_BASE_PATH} element={<AdminLayout />}>
          <Route
            path={PRIVATE.ADMIN.PAGES.DASHBOARD}
            element={
              <Suspense fallback={<Loader />}>
                <Dashboard />
              </Suspense>
            }
          />

          <Route
            path={PRIVATE.ADMIN.PAGES.CALL_DETAILS}
            element={
              <Suspense fallback={<Loader />}>
                <CallDetails />
              </Suspense>
            }
          />

          <Route
            path={PRIVATE.ADMIN.PAGES.CALL_DETAILS_INDIVIDUAL}
            element={
              <Suspense fallback={<Loader />}>
                <CallUserDetails />
              </Suspense>
            }
          />

          <Route
            path={ERROR.CATCH_ALL}
            element={
              <Suspense fallback={<Loader />}>
                <Error type={404} />
              </Suspense>
            }
          />
          <Route index element={<Navigate to={PRIVATE.ADMIN.PAGES.INDEX} />} />
        </Route>

        {/* Other Routes */}
        <Route
          path={ERROR.CATCH_ALL}
          element={
            <Suspense fallback={<Loader />}>
              <Error type={404} />
            </Suspense>
          }
        />
        <Route
          path={ERROR.ERROR_403}
          element={
            <Suspense fallback={<Loader />}>
              <Error type={403} />
            </Suspense>
          }
        />
        <Route index element={<Navigate to={PUBLIC.PAGES.LANDING} />} />
      </Routes>
    </Suspense>
  );
};

export default MainRoute;
