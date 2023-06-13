import React,{lazy, Suspense} from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import { PRIVATE, AUTH, ERROR } from './routes'
import AuthLayout from '../layouts/auth.layout'
import PrivateLayout from '../layouts/private.layout'
import Loader from "../components/loader"

const Welcome = lazy(() => import("../pages/welcome"))
const Phone = lazy(() => import("../pages/phone"))
const Otp = lazy(() => import("../pages/otp"))
const Department = lazy(() => import("../pages/department"))

const Index = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path={AUTH.BASE_PATH} element={<AuthLayout/>}>
            <Route path={AUTH.PAGES.WELCOME} element={<Welcome/>} />
            <Route path={AUTH.PAGES.MOBILE} element={<Phone/>} />
            <Route path={AUTH.PAGES.OTP} element={<Otp/>} />
            <Route path={AUTH.PAGES.DEPARTMENT} element={<Department />} />
            <Route index element={<Navigate to={AUTH.PAGES.WELCOME} />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default Index