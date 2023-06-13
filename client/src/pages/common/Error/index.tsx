import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";
import { getUserPath } from "../../../utils/getUserPath";

const Error: React.FC<{
  type: 401 | 403 | 404;
}> = ({ type }) => {
  const navigate = useNavigate();

  const getContent = () => {
    switch (type) {
      case 401:
        return "Unauthorized!";
      case 403:
        return "Forbidden";
      case 404:
        return "Page Not Found";
      default:
        return "Page Not Found";
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
      }}>
      <main>
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div
              className="col-lg-10 d-flex  align-items-center justify-content-center"
              style={{ height: "100vh" }}>
              <div className="text-center">
                <p className="head">{getContent()}</p>
                {
                  <button
                    onClick={() => {
                      type === 403 ? getUserPath("") : navigate(-1);
                    }}
                    className="btn btn-primary-g btn-md mt-2">
                    <FontAwesomeIcon
                      icon={faAngleLeft}
                      className="mr-1"></FontAwesomeIcon>
                    Go back
                  </button>
                }
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Error;
