import React from "react";
import ticketIcon from "../../../../assets/images/ticketIcon.svg";
import leftArrow from "../../../../assets/images/leftArrow.svg";
import drpMenu from "../../../../assets/images/drpMenu.svg";

export default function CallUserHeader() {
  return (
    <div className="flex justify-between h-20  ring-2 ring-gray-100 shadow-sm  justify-center items-center p-6">
      <div className="flex">
        <img
          className="w-2 mt-2 h-4 mr-4 justify-center item-center"
          src={leftArrow}
          alt=""
        />
        <h1 className="font-medium text-xl">Mammooty</h1>
      </div>
      <div>
        <ul className="flex">
          <div className="ml-6">
            <h1 className="text-base">
              {" "}
              <span className="text-gray-400 text-base mr-2">Assigned :</span>
              Shibin Kumar
            </h1>
          </div>

          <div className="ml-6 flex">
            {" "}
            <img src={ticketIcon} alt="" />
            <h1 className="text-gray-400 ">
              <span className="mr-2 ml-1 text-sky-600">#</span> 1234A567
            </h1>
          </div>
          <div className="ml-6 flex">
            <h1 className="text-gray-400 ">
              <span className="w-2 h-2 rounded-full bg-red-500 inline-block mr-2"></span>
              High
            </h1>
          </div>

          <li className="ml-6">
            <img className="mt-1" src={drpMenu} alt="" />
          </li>
        </ul>
      </div>
    </div>
  );
}
