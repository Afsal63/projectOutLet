import React, { useState } from "react";
import callLog from "../../../assets/images/call-logs.svg";
import ticketIcon from "../../../assets/images/ticketIcon.svg";
import { Link } from "react-router-dom";
import CallTicketControl from "./callTicketControls";

const ContentHeader = (props) => {
  const { callSection, setCallSection } = props;
  // const [callSection, setCallSection] = useState("callLog"); //callLog,ticket
  return (
    <>
      <div className="flex items-center justify-between mb-[23px]">
        <div className="flex gap-[25px]">
          <button
            onClick={() => setCallSection("callLog")}
            className={` ${
              callSection == "callLog"
                ? "bg-[#F3F8FF] px-[15px] flex items-center gap-[9px] border-[1px] border-solid rounded-[10px] text-[16px] text-[#3372D1] font-normal"
                : "p-[13px] flex items-center gap-[9px] rounded-[10px] text-[16px] font-normal"
            } `}
          >
            <img src={callLog} />
            <span>Call Logs</span>
          </button>

          <button
            onClick={() => setCallSection("ticket")}
            className={` ${
              callSection == "ticket"
                ? "bg-[#F3F8FF] px-[15px] flex items-center gap-[9px] border-[1px] border-solid rounded-[10px] text-[16px] text-[#3372D1] font-normal"
                : "p-[13px] flex items-center gap-[9px] rounded-[10px] text-[16px] font-normal"
            } `}
          >
            <img src={ticketIcon} />
            <span>Tickets</span>
          </button>
        </div>
        <div>
          <button className="bg-[#3F8CFF] flex items-center gap-[9px] border-[1px] border-solid rounded-[10px] text-[16px] text-[#FFFFFF] font-normal px-[27px] h-[50px]">
            <span>Create a Ticket</span>
          </button>
        </div>
      </div>

      <CallTicketControl />
    </>
  );
};

export default ContentHeader;
