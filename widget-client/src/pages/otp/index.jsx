import React from 'react'
import { Link } from "react-router-dom";
import BackButton from "../../assets/back-button.svg";

const Otp = () => {
  return (
    <div>
      <div className="mt-20 mx-12">
        <span className="inline-flex items-baseline  text-indigo-900 cursor-pointer">
          <img src={BackButton} alt="Phone-icon" />
          <h3 className="px-1">Back</h3>
        </span>
      </div>
      <div className="container py-10 px-10 mx-0 flex min-w-full flex-col items-center">
        <div className="text-center">
          <h1 className="font-['body'] font-medium leading-8 text-2xl">
            Phone verification
          </h1>
          <p className="font-['body'] text-indigo-900 font-normal text-base space-y-1 leading-6 tracking-wider">
            We have sent you One Time Password to your +91 9245237890
          </p>
        </div>
        <div className="mt-12 font-['body'] text-indigo-900">
          <h4 className="font-medium text-base">
            Email Verification Code
          </h4>
          <input
            className="item-center rounded-lg w-[286px] h-[50px] p-3.5 border border-blue-300 font-['body'] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            type="number"
            placeholder="verification code send"
          />
        </div>
        <div class="relative flex pl-12 py-5 items-center">
          <p className="font-['body'] text-right-indigo-900 font-normal text-base space-y-1 leading-6 tracking-wider">
            Didn't recieve the code? <span className="text-sky-600"> Resend</span>
          </p>
          <div class="flex-grow border-t border-gray-400"></div>
        </div>
        <Link to="/auth/department">
        <button className="w-[286px] h-[50px] rounded-lg bg-sky-600 text-gray-50 font-['body']">
          Get In
        </button>
        </Link>
      </div>
    </div>
  )
}

export default Otp