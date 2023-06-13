import React from "react";

import AdminSideNavData from "../../../config/adminSideNav";
import { useLocation, useNavigate } from "react-router-dom";

const AdminSideNav: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="left-panel bg-[#FFFFFF] w-[235px] border-r-[1px] border-solid border-[#E7E7E7] shadow-md px-[20px] pt-[40px]">
      <h3 className="text-[#3372D1] text-[40px]">Dialler.</h3>

      <ul className="mt-[53px]">
        {AdminSideNavData.map((item: any) => (
          <li
            className="inline-flex h-[19px] gap-[18px] mb-[30px]"
            onClick={() => navigate(`${item.link}`)}
          >
            <i className="items-center">
              <img src={item?.icon} />
            </i>
            <span
              className={`text-[16px] text-[${
                location.pathname.includes(item.link) ? "#3e8cff" : "#8F8F8F"
              }]`}
            >
              {item?.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminSideNav;
