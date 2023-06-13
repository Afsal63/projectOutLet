import { toast, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.min.css";
// import "bootstrap/scss/bootstrap.scss";
// import "font-awesome/css/font-awesome.min.css";
// import "./assets/scss/customstyle.scss";

import MainRoute from "./routes";
import { useEffect } from "react";
import { checkAuthorization } from "./store/slices/user";
import { useAppDispatch } from "./store/hooks";

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkAuthorization());
  }, [dispatch]);

  return (
    <>
      <MainRoute />
      <ToastContainer
        closeOnClick
        style={{ width: "auto", minWidth: "340px", maxWidth: "450px" }}
        position={toast.POSITION.BOTTOM_RIGHT}
        bodyStyle={{ color: "#756f86" }}
      />
    </>
  );
};

export default App;
