import React from "react";

import Visitors from "./visitors";
import Calls from "./calls";
import Pageviews from "./pageviews";
import Report from "./report";

const Statitics = () => {
  return (
    <div className="flex flex-col h-full gap-4">
      <div className="flex flex-1 gap-4">
        <div className="flex-1">
          <Visitors />
        </div>
        <div className="flex-1">
          <Calls />
        </div>
      </div>
      <div className="flex flex-1 gap-4">
        <div className="flex-1">
          <Pageviews />
        </div>
        <div className="flex-1">
          <Report />
        </div>
      </div>
    </div>
  );
};

export default Statitics;
