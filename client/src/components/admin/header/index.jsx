import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Bellicon from "../../../assets/images/bellicon.svg";
import searchIcon from "../../../assets/images/searchicon.svg";
import AdminSideNavData from "../../../config/adminSideNav";

const AdmindHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const title = AdminSideNavData.find((item) =>
    location.pathname.includes(item.link)
  ).title;
  return (
    <nav className="w-full shadow-md py-10 px-4 flex justify-between items-center">
      <div className="flex items-center">
        <h1 className=" font-medium text-2xl">{title}</h1>
      </div>
      <div className="flex items-center gap-6 h-12">
        <div className="search-bar bg-white border border-gray-300 flex items-center gap-4 px-3 py-1 w-full max-w-sm rounded-lg shadow-sm">
          <div className="search-icon flex items-center justify-center w-5 h-5 rounded-full">
            <img src={searchIcon} alt="search icon" />
          </div>
          <input
            type="text"
            placeholder="Search for anything"
            className="font-medium text-gray-700 w-full focus:outline-none"
          />
        </div>
        <div className="notification">
          <img src={Bellicon} alt="notification icon" className="h-6" />
        </div>
        <div className="profile-image">
          <img
            src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
            alt="profile"
            className="h-9 rounded-lg"
          />
        </div>
      </div>
    </nav>
  );
};

export default AdmindHeader;
