import avatar from "../../../../assets/images/avatar.svg";
import dropMenu from "../../../../assets/images/drpMenu.svg";
import location from "../../../../assets/images/location-icon.svg";

export default function CallUserSideBar() {
  return (
    <div>
      <div className=" h-auto ">
        {/* header */}
        <div className="  h-20 p-4 flex items-center ring-2 ring-gray-100 shadow-sm">
          <h1 className="text-xl font-medium">User Profile</h1>
        </div>
        <div className="flex-row border border-black-500 rounded-xl m-2">
          <div className="flex p-6 justify-between">
            <div className="flex">
              <span className="w-[30px] h-[30px] bg-[#F8FBFF] border border-blue-500 flex justify-center items-center rounded-xl">
                <img src={avatar} alt="" />
              </span>
              <h1 className="text-black-500 flex justify-center items-center ml-[10px]">
                Personal Information
              </h1>
            </div>
            <div>
              <img src={dropMenu} alt="" />
            </div>
          </div>
          <div class="p-4">
            <table class=" bg-white  ">
              <tbody>
                <tr>
                  <td class="py-2 px-4   text-gray-400">Name</td>
                  <td class="py-2 px-4   text-blue-500">: Adila sharin</td>
                </tr>
                <tr>
                  <td class="py-2 px-4   text-gray-400">Phone Number</td>
                  <td class="py-2 px-4 text-blue-500 ">: -</td>
                </tr>
                <tr>
                  <td class="py-2 px-4   text-gray-400">ID</td>
                  <td class="py-2 px-4   text-blue-500">: V12345678</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className=" h-auto">
        {/* header */}

        <div className="flex-row border border-black-500 rounded-xl m-2">
          <div className="flex p-6 justify-between">
            <div className="flex">
              <span className="w-[30px] h-[30px] bg-[#F8FBFF] border border-blue-500 flex justify-center items-center rounded-xl">
                <img src={location} alt="" />
              </span>
              <h1 className="text-black-500 flex justify-center items-center ml-[10px]">
                Location Details
              </h1>
            </div>
            <div>
              <img src={dropMenu} alt="" />
            </div>
          </div>
          <div class="p-4">
            <table class=" bg-white  ">
              <tbody>
                <tr>
                  <td class="py-2 px-4   text-gray-400">City</td>
                  <td class="py-2 px-4   text-blue-500">: Kozhikode</td>
                </tr>
                <tr>
                  <td class="py-2 px-4   text-gray-400">State</td>
                  <td class="py-2 px-4 text-blue-500 ">: Kerala</td>
                </tr>
                <tr>
                  <td class="py-2 px-4   text-gray-400">Country</td>
                  <td class="py-2 px-4   text-blue-500">: India</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
