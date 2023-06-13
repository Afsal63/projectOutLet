import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import { useAppSelector } from "../store/hooks";
import AdminSideNav from "../components/admin/sidenav";
import AdmindHeader from "../components/admin/header";

const AdminLayout: React.FC<any> = () => {
  const { user, isAuthenticated } = useAppSelector((state) => state.user);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location?.pathname]);

  // if (
  //     (isSuperAdmin && user?.role !== ROLES.SUPER_ADMIN) ||
  //     (!isSuperAdmin && user?.role !== ROLES.ADMIN)
  // ) {
  //     return (
  //         <Navigate to={isAuthenticated ? ERROR.ERROR_403 : AUTH.BASE_PATH} />
  //     );
  // }

  return (
    <>
      <section className="flex">
        <div className="left-panel bg-[#FFFFFF] w-[235px]">
          <AdminSideNav />
        </div>
        <div className="right-panel w-full">
          <div className="top-header">
            <AdmindHeader />
          </div>
          <div className="content-section">
            <Outlet />
          </div>
        </div>
      </section>

      {/* <Outlet /> */}
    </>
  );
};

export default AdminLayout;
