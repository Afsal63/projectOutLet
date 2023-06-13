import React from 'react'
import { Link } from "react-router-dom";
import TelePhone from "../../assets/tele-phone.svg";

const Phone = () => {
  return (
    <div className="container py-10 px-10 mt-20 mx-0 flex min-w-full flex-col items-center">
      <div className="">
        <img src={TelePhone} alt="Phone-icon" />
      </div>
      <div className="text-center">
        <h1 className="font-['body'] font-medium leading-8 text-2xl">
         Let's get started 
        </h1>
        <p className="font-['body'] text-indigo-900 font-normal text-base space-y-1 leading-6 tracking-wider">
          Enter your phone number to login to have a quick call
        </p>
      </div>
      <div className="mt-12 font-['body'] text-indigo-900">
        <h4 className="font-medium text-base">
          Phone number
        </h4>
        <input
          className="item-center rounded-lg w-[286px] h-[50px] p-3.5 border border-blue-300 font-['body'] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          type="number"
          placeholder="Enter your number"
        />
      </div>
      <div class="relative flex py-5 items-center">
        <div class="flex-grow border-t border-gray-400"></div>
        <div class="flex-grow border-t border-gray-400"></div>
      </div>
      <Link to="/auth/otp">
        <button className="w-[286px] h-[50px] rounded-lg bg-sky-600 text-gray-50 font-['body']">
          Get OTP
        </button>
      </Link>
    </div>
  )
}

export default Phone