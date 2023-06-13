import React from "react";
import visitors from ".././../../../assets/images/report.svg";
import increase from ".././../../../assets/images/increase.svg";

const Report = () => {
  return (
    <div className="flex flex-col justify-between items-start border border-gray-300 rounded-xl w-full h-full p-8">
      <div className="flex items-center gap-2.5">
        <img src={visitors} alt="" className="bg-purple-100 rounded-lg p-2.5" />
        <p className="font-medium text-base text-gray-700">Reports</p>
      </div>
      <div className="flex w-full justify-between">
        <div className="flex flex-col gap-2">
          <span className="text-sm/[16px] text-[#6B6B6B]">
            Positive Statement
          </span>
          <span className="text-sm/[16px] text-[#6B6B6B]">
            Positive Statement
          </span>
          <span className="text-sm/[16px] text-[#6B6B6B]">
            Positive Statement
          </span>
        </div>
        <div className="flex flex-col">
          <div className="flex gap-2">
            <img src={increase} alt="" />
            <span className="text-[#27AE60]">16%</span>
          </div>
          <div className="flex gap-2">
            <img src={increase} alt="" />
            <span className="text-[#27AE60]">16%</span>
          </div>
          <div className="flex gap-2">
            <img src={increase} alt="" />
            <span className="text-[#27AE60]">16%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Report;
