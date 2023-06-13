import React from "react";

import Graph from "./graph";
import News from "./news";
import Calllog from "./calllog";
import Statitics from "./statitics";

const Dashboard = () => (
  <div className="flex flex-col h-screen">
    <div className="flex flex-1">
      <div className="flex-1 p-[15px]">
        <Graph />
      </div>
      <div className="flex-1 p-[15px]">
        <Statitics />
      </div>
    </div>
    <div className="flex flex-1">
      <div className="flex-1 p-[15px]">
        <Calllog />
      </div>
      <div className="flex-1 p-[15px]">
        <News />
      </div>
    </div>
  </div>
);
export default Dashboard;
