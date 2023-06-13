import downArrow from "../../../../assets/images/downArrow.svg";

import message from "../../../../assets/images/message.svg";
import rectangle from "../../../../assets/images/missedCall.svg";
import ticketIconWhite from "../../../../assets/images/ticketIconWhite.svg";
import ticketIcon from "../../../../assets/images/ticketIcon.svg";
import rejected from "../../../../assets/images/rejected.svg";

export default function CallUserBody() {
  return (
    <>
      <div
        className="p-6 overflow-x-scroll border-r border-gray-300"
        style={{ height: "calc(100vh - 208px)" }}
      >
        <div className="flex justify-center ">
          <h1 className="text-gray-400 mt-6">May 22, 2023 </h1>
        </div>

        <div className="relative before:content-[''] before:absolute before:w-0.5 before:bg-[#E7E7E7] before:h-full before:left-[22px] before:z-[-1]">
          <div className="mt-9 flex-row">
            <div className="flex">
              <span className="w-11 h-11 shadow-2xl shadow-white bg-[#5a9548] flex justify-center items-center text-white rounded-lg shadow-[0_0_0_10px_rgb(255,255,255)]">
                PH
              </span>

              <h1 className="text-black-400 tex-base flex items-center ml-4">
                Adila sharin Changed the status to
              </h1>
              <span className="w-28 h-11  bg-green-500 bg-opacity-10 border border-green-500 flex justify-center items-center text-white rounded-3xl text-green-500 ml-4">
                Open
              </span>
            </div>
            <div>
              <p className="text-gray-400 ml-16 mt-2">3:23 PM</p>
            </div>
          </div>

          <div className="mt-9 flex-row">
            <div className="flex">
              <span className="w-11 h-11  bg-[#5a9548] flex justify-center items-center text-white rounded-full shadow-[0_0_0_10px_rgb(255,255,255)]">
                <img className="h-3.5" src={downArrow} alt="" />
              </span>

              <h1 className="text-black-400 tex-base flex items-center ml-4">
                Answered the call
              </h1>
            </div>
            <div>
              <p className="text-gray-400 ml-16 mt-2">3:23 PM</p>
            </div>
          </div>

          <div className="mt-9 flex-row">
            <div className="flex">
              <span className="w-11 h-11  bg-[#173c6c] flex justify-center items-center text-white rounded-full shadow-[0_0_0_10px_rgb(255,255,255)]">
                <img src={message} alt="" />
              </span>

              <h1 className="text-black-400 tex-base flex items-center ml-4">
                Request a call via msg
              </h1>
            </div>
            <div>
              <p className="text-gray-400 ml-16 mt-2">3:23 PM</p>
            </div>
          </div>

          <div className="mt-9 flex-row">
            <div className="flex">
              <span className="w-11 h-11  bg-[#3372D1] flex justify-center items-center text-white rounded-full shadow-[0_0_0_10px_rgb(255,255,255)]">
                <img src={ticketIconWhite} alt="" />
              </span>

              <h1 className="text-black-400 tex-base flex items-center ml-4">
                Raised Ticket
              </h1>
            </div>

            <div className="ml-16 ">
              <div className="bg-[#F8FBFF] p-4 rounded-xl border border-sky-500">
                <ul className="flex">
                  <li>
                    <img className="mt-[3px]" src={ticketIcon} alt="" />
                  </li>
                  <li>
                    <span
                      style={{ marginLeft: "6px" }}
                      className="text-blue-400  "
                    >
                      #
                    </span>
                    <span
                      style={{ marginLeft: "6px" }}
                      className="text-gray-400"
                    >
                      1234A567
                    </span>
                  </li>
                  <li className="ml-4">
                    <h1 className="text-gray-400 ">
                      <span className="w-2 h-2 rounded-full bg-red-500 inline-block mr-2"></span>
                      High
                    </h1>
                  </li>
                </ul>

                <div>
                  <p className="mt-3">
                    Analysis refers to breaking down an issue – which is usually
                    a large, complex, integrated mix of ideas – into distinct
                    pieces, and then re-forming those pieces into a focused
                    thesis that presents your informed interpretation of the
                  </p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-gray-400 ml-16 mt-2">3:23 PM</p>
            </div>
          </div>

          <div className="mt-9 flex-row">
            <div className="flex">
              <span className="w-11 h-11  bg-[#EB9557] flex justify-center items-center text-white rounded-full shadow-[0_0_0_10px_rgb(255,255,255)]">
                <img src={rectangle} alt="" />
              </span>

              <h1 className="text-black-400 tex-base flex items-center ml-4">
                Missed The call
              </h1>
            </div>
            <div>
              <p className="text-gray-400 ml-16 mt-2">3:23 PM</p>
            </div>
          </div>

          <div className="mt-9 flex-row">
            <div className="flex">
              <span className="w-11 h-11  bg-[#bf3131] flex justify-center items-center text-white rounded-full shadow-[0_0_0_10px_rgb(255,255,255)]">
                <img className="h-5 w-full" src={rejected} alt="" />
              </span>

              <h1 className="text-black-400 tex-base flex items-center ml-4">
                Rejected the call
              </h1>
            </div>
            <div>
              <p className="text-gray-400 ml-16 mt-2">3:23 PM</p>
            </div>
          </div>

          <div className="mt-9 flex-row">
            <div className="flex">
              <span className="w-11 h-11 shadow-2xl shadow-white bg-[#5a9548] flex justify-center items-center text-white rounded-lg shadow-[0_0_0_10px_rgb(255,255,255)]">
                PH
              </span>

              <h1 className="text-black-400 tex-base flex items-center ml-4">
                Adila sharin Changed the status to
              </h1>
              <span className="w-28 h-11  bg-gray-500 bg-opacity-10 border border-black-700 flex justify-center items-center  rounded-3xl text-gray-500 ml-4">
                Closed
              </span>
            </div>
            <div>
              <p className="text-gray-400 ml-16 mt-2">3:23 PM</p>
            </div>
          </div>

          <div className="mt-9 flex-row">
            <div className="flex">
              <span className="w-11 h-11 shadow-2xl shadow-white bg-[#5a9548] flex justify-center items-center text-white rounded-lg shadow-[0_0_0_10px_rgb(255,255,255)]">
                PH
              </span>

              <h1 className="text-black-400 tex-base flex items-center ml-4">
                Adila sharin Changed the status to
              </h1>
              <span className="w-28 h-11  bg-yellow-500 bg-opacity-10 border border-yellow-500 flex justify-center items-center  rounded-3xl text-yellow-500 ml-4">
                Pending
              </span>
            </div>
            <div>
              <p className="text-gray-400 ml-16 mt-2">3:23 PM</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
