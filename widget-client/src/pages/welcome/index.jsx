import React from "react";
import { Link } from "react-router-dom";
import TelePhone from "../../assets/tele-phone.svg";
import SearchIcon from "../../assets/search-icon.svg"

const Index = () => {
  return (
    <div className="container py-10 px-10 mt-20 mx-0 flex min-w-full flex-col items-center">
      <div className="">
        <img src={TelePhone} alt="Phone-icon" />
      </div>
      <div className="text-center">
        <h1 className="font-medium leading-8 text-2xl">
          Welcome to <span className="text-sky-600">Dialer.to</span>
        </h1>
        <p className="text-indigo-900 font-normal text-base space-y-1 leading-6 tracking-wider">
          Search our knowledge base or call us directly for any enquiry
        </p>
      </div>
      <div className="mt-12 text-indigo-900">
        <h4 className="font-medium text-base">
          Example: How to merge contacts?
        </h4>
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <button
              type="submit"
              className="p-1 focus:outline-none focus:shadow-outline"
            >
              <img alt="Search-Icon" src={SearchIcon} />
            </button>
          </span>
          <input
            className="item-center rounded-lg w-[286px] h-[50px] p-3.5 pl-12 border border-blue-300"
            type="text"
            placeholder="Search for anything?"
          />
        </div>
      </div>
      <div className="relative flex py-5 items-center">
        <div className="flex-grow border-t border-gray-400"></div>
        <span className="flex-shrink mx-4 text-gray-400">OR</span>
        <div className="flex-grow border-t border-gray-400"></div>
      </div>
      <Link to="/auth/mobile">
        <button className="w-[286px] h-[50px] rounded-lg bg-sky-600 text-gray-50">
          Make a quick call
        </button>
      </Link>
    </div>
  );
};

export default Index;
