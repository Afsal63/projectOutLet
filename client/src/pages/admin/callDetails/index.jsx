import React, { useState } from "react";
import CallHeader from "./callHeader";
import CallBody from "./callBody";
import Tickets from "./tickets";

const CallDetails = () => {
  const [callSection, setCallSection] = useState("callLog"); //callLog,ticket
  return (
    <div>
      <CallHeader callSection={callSection} setCallSection={setCallSection} />
      {callSection == "callLog" ? <CallBody /> : <Tickets />}
    </div>
  );
};

export default CallDetails;
