import React from "react";

import visitors from "../../../../assets/images/call.svg";
import increase from "../../../../assets/images/increase.svg";
import decrease from "../../../../assets/images/decrease.svg";

const Calls = () => (
  <div className="flex flex-col justify-between border border-gray-300 rounded-xl w-full h-full p-8">
    <div className="flex items-center gap-2.5">
      <img src={visitors} alt="" className="bg-purple-100 rounded-lg p-2.5" />
      <p className="font-medium text-gray-700">Calls</p>
    </div>
    <div className="flex flex-col md:flex-row md:justify-between">
      <div>
        <div className="flex gap-2 place-items-center">
          <h3 className="font-medium text-2xl text-gray-800">24</h3>
          <img src={increase} alt="" />
          <span className="text-[#27AE60]"> 16%</span>
        </div>
        <div>
          <span className=" text-[#8F8F8F] font-normal text-sm">
            Answered Calls
          </span>
        </div>
      </div>
      <div className="flex flex-col justify-end md:ml-4">
        <div>
          <div className="flex gap-2 place-items-center">
            <h3 className="text-2xl">24</h3>
            <img src={decrease} alt="" />
            <span className="text-[#EB5757]"> 16%</span>
          </div>
          <div>
            <span className=" text-[#8F8F8F] font-normal text-sm">
              Answered Calls
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Calls;
