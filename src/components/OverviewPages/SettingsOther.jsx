import React from "react";
import ProjectLogo from "../../svg/ProjectLogo";
import DarkModeIcon from "../../svg/DarkModeIcon";
import GlobalIcon from "../../svg/GlobalIcon";
import NotificationIcon from "../../svg/NotificationIcon";
import UserIcon from "../../svg/UserIcon";
import PortalIcon from "../../svg/PortalIcon";
import FileUploadIcon from "../../svg/FileUploadIcon";
import MobileHamburgerIcon from "../../svg/MobileHamburgerIcon";
import DownArrowIcon from "../../svg/DownArrowIcon";

const SettingsOther = () => {
  return (
    <div className="p-12 max-md:p-6 max-sm:p-4">
      {/* Header Content */}
      <div className="w-full flex justify-between items-center">
        <ProjectLogo className={"w-12 h-8 fill-black"} />

        <div className="flex justify-center items-center gap-12 max-md:hidden">
          <p className="text-xl leading-7 underline underline-offset-[16px]">Overview</p>
          <p className="text-xl leading-7">Clients</p>
          <p className="text-xl leading-7">Team</p>
          <button className="bg-lime-500 flex justify-center items-center gap-2.5 rounded-full py-1.5 px-4">
            <PortalIcon className={"w-6 h-6 max-md:w-5 max-md:h-5 max-sm:w-4 max-sm:h-4 fill-black"} />
            <p>Portal</p>
          </button>
        </div>

        <div className="flex justify-start items-center gap-5 max-md:hidden">
          <DarkModeIcon className={"w-6 h-6 max-md:w-5 max-md:h-5 max-sm:w-4 max-sm:h-4 stroke-black stroke-[1.5px] fill-none"} />
          <GlobalIcon className={"w-6 h-6 max-md:w-5 max-md:h-5 max-sm:w-4 max-sm:h-4  fill-black"} />
          <NotificationIcon className={"w-6 h-6 max-md:w-5 max-md:h-5 max-sm:w-4 max-sm:h-4  stroke-black fill-none "} />
          <UserIcon className={"w-6 h-6 max-md:w-5 max-md:h-5 max-sm:w-4 max-sm:h-4 fill-black"} />
        </div>

        <MobileHamburgerIcon className={"hidden max-md:block w-6 h-6 max-md:w-5 max-md:h-5 max-sm:w-4 max-sm:h-4 stroke-black stroke-2"} />
      </div>
      {/* Type Title Content */}
      <div className="flex justify-between items-center w-full mt-5">
        <h3 className="text-4xl font-bold leading-10 max-md:text-2xl">SETTINGS</h3>

        <div className="flex justify-start items-center gap-5">
          <button className="outline-none border-[0.5px] border-black rounded-full py-0.5 px-4 text-base leading-6">Date</button>
          <button className="w-9 h-9 flex justify-center items-center outline-none border-[0.5px] border-black rounded-full">
            <FileUploadIcon className={"w-6 h-6 max-md:w-5 max-md:h-5 max-sm:w-4 max-sm:h-4 stroke-black stroke-[1.5px] fill-none"} />
          </button>
        </div>
      </div>
      {/* Main Content */}
      <div className="grid grid-cols-12 gap-4 p-5 rounded-[40px] bg-white bg-opacity-75 mt-20">
        <div className="col-span-3 border-r border-gray-600 max-sm:col-span-5">
          <ul className="px-5 py-3 max-md:py-2.5">
            <li className="py-3.5 max-md:py-2.5 max-sm:py-1.5">
              <p className="text-xl leading-7 max-md:text-base max-md:leading-6 max-sm:text-sm max-sm:leading-5">Company</p>
            </li>
            <li className="py-3.5 max-md:py-2.5 max-sm:py-1.5">
              <p className="text-xl leading-7 max-md:text-base max-md:leading-6 max-sm:text-sm max-sm:leading-5">Rules</p>
            </li>
            <li className="py-3.5 max-md:py-2.5 max-sm:py-1.5">
              <p className="text-xl leading-7 max-md:text-base max-md:leading-6 max-sm:text-sm max-sm:leading-5">Emails</p>
            </li>
            <li className="py-3.5 border-b border-black w-fit max-md:py-2.5 max-sm:py-1.5">
              <p className="text-xl leading-7 max-md:text-base max-md:leading-6 max-sm:text-sm max-sm:leading-5">Other Settings</p>
            </li>
          </ul>
        </div>
        <div className="col-span-9 max-sm:col-span-7">
          {/* Clients Container */}
          <div className="col-span-7 p-6 rounded-[40px] max-md:col-span-full">
            <h3 className="text-4xl leading-10 font-bold max-md:text-2xl max-sm:text-xl">Other Settings</h3>
            {/* File Input */}
            <div className="mt-10 max-w-lg">
              <div className="relative w-full">
                <select className="appearance-none text-gray-400 outline-none bg-transparent border border-gray-400 p-5 py-3 rounded-full w-full">
                  <option value="mainLanguage">Main Language</option>
                  <option value="mainLanguage">Main Language</option>
                  <option value="mainLanguage">Main Language</option>
                </select>
                <DownArrowIcon className={"w-6 h-6 max-md:w-5 max-md:h-5 max-sm:w-4 max-sm:h-4 stroke-black fill-none absolute right-4 top-3.5"} />
              </div>
            </div>

            {/* Text Inputs */}
            <div className="flex flex-col gap-5 w-full max-w-lg mt-5">
              <input className="placeholder:text-gray-400 text-black outline-none bg-transparent border border-gray-400 p-5 py-3.5 rounded-full w-full leading-3" type="text" placeholder="Other Language Options" />
              <input className="placeholder:text-gray-400 text-black outline-none bg-transparent border border-gray-400 p-5 py-3.5 rounded-full w-full leading-3" type="text" placeholder="Currency" />
              <input className="placeholder:text-gray-400 text-black outline-none bg-transparent border border-gray-400 p-5 py-3.5 rounded-full w-full leading-3" type="text" placeholder="Measurement" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsOther;
