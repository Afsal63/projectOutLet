import React from "react";
import visitors from "../../../../assets/images/visitors.svg";
import increase from "../../../../assets/images/increase.svg";

const Visitors = () => {
  return (
    <div className="flex flex-col justify-between items-start border border-gray-300 rounded-xl w-full h-full p-8">
      <div className="flex items-center gap-2.5">
        <img src={visitors} alt="" className="bg-purple-100 rounded-lg p-2.5" />
        <p className="font-medium text-base text-gray-700">Visitors</p>
      </div>
      <div className="flex w-full justify-between">
        <div>
          <h3 className="font-medium text-2xl text-gray-800">24</h3>
          <span className=" text-[#8F8F8F] font-normal text-sm">Today</span>
        </div>
        <div className="flex flex-col justify-end">
          <div className="flex gap-2 justify-end">
            <img src={increase} alt="" />
            <span className="text-[#27AE60]"> 16%</span>
          </div>
          <span className=" text-[#8F8F8F] font-normal text-sm">
            Last 7 days
          </span>
        </div>
      </div>
    </div>
  );
};

export default Visitors;
