import React, { useState } from "react";
import LineChart from "./linechart";

const Graph = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border border-gray-300 rounded-lg p-8 w-full h-full">
      <div className="flex justify-between mb-6">
        <div className="heading">
          <h3 className="font-medium text-lg">Live Visitor</h3>
          <p className="text-gray-500 text-sm">
            We have sent you One Time Password to your
          </p>
        </div>
        <div className="time-stamp">
          <div className="dropdown">
            <button
              className="border border-gray-300 rounded-md px-4 py-2 text-sm font-medium"
              onClick={toggleDropdown}
            >
              Live Now
            </button>
            {isOpen && (
              <div className="dropdown-content absolute">
                <li className="block px-4 py-2 cursor-pointer">Option 1</li>
                <li className="block px-4 py-2 cursor-pointer">Option 2</li>
                <li className="block px-4 py-2 cursor-pointer">Option 3</li>
              </div>
            )}
          </div>
        </div>
      </div>
      <div>
        <LineChart />
      </div>
    </div>
  );
};

export default Graph;
