import React from "react";
import visitors from ".././../../../assets/images/page-views.svg";
import increase from ".././../../../assets/images/increase.svg";

const Pageviews = () => {
  return (
    <div className="flex flex-col justify-between items-start border border-gray-300 rounded-xl w-full h-full p-8">
      <div className="flex items-center gap-2.5">
        <img src={visitors} alt="" className="bg-purple-100 rounded-lg p-2.5" />
        <p className="font-medium text-base text-gray-700">Page Views</p>
      </div>
      <div className="flex w-full justify-between md:flex-row md:justify-between">
        <div>
          <h3 className="font-medium text-2xl  text-gray-800">24</h3>
          <span className=" text-[#8F8F8F] font-normal text-sm">Today</span>
        </div>
        <div className="flex flex-col justify-end md:ml-4">
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

export default Pageviews;
