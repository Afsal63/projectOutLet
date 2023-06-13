import React from "react";
import callIncoimg from "../../../assets/images/callincoming.svg";

const CallLog = () => {
  return (
    <div className="calllog w-full h-auto p-30 bg-white border border-gray-300 rounded-xl p-8">
      <div className="mb-8 flex flex-col">
        <h3 className="font-medium text-lg ">Call Log</h3>
        <span className="text-sm text-[#8f8f8f]">
          We have sent you One Time Password to your email-id
        </span>
      </div>
      <div className="call-list flex flex-col p-0 border rounded-[1.25rem] overflow-hidden">
        <table className="text-[#6B6B6B] py-4 p-30">
          <tr className="bg-gray-50 text-left">
            <th className="p-4">Calls</th>
            <th>Agent</th>
            <th>Time</th>
          </tr>
          <tr>
            <td className="p-3.5">
              Aswinjith
              <span className="flex text-sm items-baseline gap-1 font-normal">
                <span>
                  <img src={callIncoimg} alt="" />
                </span>
                <span className="text-[#27AE60]">Answered</span>
                <span>20 mins</span>
              </span>
            </td>
            <td>
              Aswinjith
              <span className="flex text-sm font-normal text-[#8f8f8f]">
                Sales
              </span>
            </td>
            <td>
              3:23 PM
              <span className="flex text-sm font-normal text-[#8f8f8f]">
                May 22 2023
              </span>
            </td>
          </tr>
          <tr>
            <td className="p-3.5">
              Aswinjith
              <span className="flex text-sm items-baseline gap-1 font-normal">
                <span>
                  <img src={callIncoimg} alt="" />
                </span>
                <span className="text-[#27AE60]">Answered</span>
                <span>20 mins</span>
              </span>
            </td>
            <td>
              Aswinjith
              <span className="flex text-sm font-normal text-[#8f8f8f]">
                Sales
              </span>
            </td>
            <td>
              3:23 PM
              <span className="flex text-sm font-normal text-[#8f8f8f]">
                May 22 2023
              </span>
            </td>
          </tr>
          <tr>
            <td className="p-3.5">
              Aswinjith
              <span className="flex text-sm items-baseline gap-1 font-normal">
                <span className="text-[#E2B93B]">Missed Call</span>
              </span>
            </td>
            <td>
              Aswinjith
              <span className="flex text-sm font-normal text-[#8f8f8f]">
                Sales
              </span>
            </td>
            <td>
              3:23 PM
              <span className="flex text-sm font-normal text-[#8f8f8f]">
                May 22 2023
              </span>
            </td>
          </tr>
          <tr>
            <td className="p-3.5">
              Aswinjith
              <span className="flex text-sm items-baseline gap-1 font-normal">
                <span>
                  <img src={callIncoimg} alt="" />
                </span>
                <span className="text-[#27AE60]">Answered</span>
                <span>20 mins</span>
              </span>
            </td>
            <td>
              Aswinjith
              <span className="flex text-sm font-normal text-[#8f8f8f]">
                Sales
              </span>
            </td>
            <td>
              3:23 PM
              <span className="flex text-sm font-normal text-[#8f8f8f]">
                May 22 2023
              </span>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default CallLog;
