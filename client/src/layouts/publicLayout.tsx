import React from "react";
import { Outlet } from "react-router-dom";

const PublicLayout: React.FC = () => {
  return (
    <div className="landing_page container flex-1">
      <header>Header</header>
      <Outlet/>
      <footer>Footer</footer>
    </div>
  );
};

export default PublicLayout;
