import { faRefresh } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface IProps {
  children: React.ReactElement;
}

interface IState {
  hasError?: boolean;
}

class ErrorBoundary extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    console.log(error);
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          className="Errorpagewrap h-100"
          style={{
            minHeight: "100vh",
          }}>
          <main>
            <div className="container">
              <div className="row align-items-center justify-content-center">
                <div
                  className="col-lg-10 d-flex  align-items-center justify-content-center"
                  style={{ height: "100vh" }}>
                  <div className="text-center ">
                    <p className="head">Something went wrong</p>

                    <button
                      onClick={() => {
                        window.location.reload();
                      }}
                      className="btn btn-primary-g btn-md mt-2">
                      <FontAwesomeIcon
                        icon={faRefresh}
                        className="mr-1"></FontAwesomeIcon>
                      Reload
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
