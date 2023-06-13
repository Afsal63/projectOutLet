import CallUserHeader from "./callUserHeader";
import CallUserBody from "./CallUserBody";
import CallUserSideBar from "./callUserSideBar";

export default function CallUserDetails() {
  return (
    <>
      <div className="flex">
        <div className="w-9/12">
          <div>
            <CallUserHeader />
            <CallUserBody />
          </div>
        </div>

        <div className="w-3/12">
          <CallUserSideBar />
        </div>
      </div>
    </>
  );
}
