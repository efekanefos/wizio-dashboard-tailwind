import React from "react";
import ProjectLogo from "../../svg/ProjectLogo";
import DarkModeIcon from "../../svg/DarkModeIcon";
import GlobalIcon from "../../svg/GlobalIcon";
import NotificationIcon from "../../svg/NotificationIcon";
import UserIcon from "../../svg/UserIcon";
import PortalIcon from "../../svg/PortalIcon";
import EditIcon from "../../svg/EditIcon";
import PlusIcon from "../../svg/PlusIcon";
import FileUploadIcon from "../../svg/FileUploadIcon";
import masterTypeAImage from "../../svg/masterTypeAImage.png";
import MobileHamburgerIcon from "../../svg/MobileHamburgerIcon";

const MasterTypeA = () => {
  return (
    <div className="bg-gray-200 p-12 max-md:p-6 max-sm:p-4">
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
          <NotificationIcon className={"w-6 h-6 max-md:w-5 max-md:h-5 max-sm:w-4 max-sm:h-4 stroke-black fill-none "} />
          <UserIcon className={"w-6 h-6 max-md:w-5 max-md:h-5 max-sm:w-4 max-sm:h-4 fill-black"} />
        </div>

        <MobileHamburgerIcon className={"hidden max-md:block w-6 h-6 max-md:w-5 max-md:h-5 max-sm:w-4 max-sm:h-4 stroke-black stroke-2"} />
      </div>
      {/* Type Title Content */}
      <div className="flex justify-between items-center w-full my-5">
        <h3 className="text-4xl font-bold leading-10 max-md:text-xl">Master Type A</h3>

        <div className="flex justify-start items-center gap-5">
          <button className="outline-none border-[0.5px] border-black rounded-full py-0.5 px-4 text-base leading-6">Date</button>
          <button className="w-9 h-9 flex justify-center items-center outline-none border-[0.5px] border-black rounded-full">
            <FileUploadIcon className={"w-6 h-6 max-md:w-5 max-md:h-5 max-sm:w-4 max-sm:h-4 stroke-black stroke-[1.5px] fill-none"} />
          </button>
        </div>
      </div>
      {/* Type Details Content */}
      <div className="flex justify-start items-center gap-12 w-full my-10 max-sm:gap-8">
        <div className="rounded-[40px] overflow-hidden">
          <img className="max-sm:max-w-28" src={masterTypeAImage} alt="masterTypeAImage" />
        </div>
        <div className="flex flex-col justify-between items-start gap-12 max-sm:gap-3">
          <div className="relative pr-6 max-sm:pr-4">
            <h2 className="font-bold text-5xl leading-10 max-sm:text-3xl max-sm:leading-8">Master Type A</h2>
            <p className="text-xl leading-4 mt-2 max-sm:text-sm max-sm:leading-5 max-sm:mt-0">Flat</p>
            <EditIcon className={"w-6 h-6 max-md:w-5 max-md:h-5 max-sm:w-4 max-sm:h-4 stroke-black fill-none absolute top-0 right-0"} />
          </div>

          <div>
            <h3 className="font-bold text-4xl leading-7 max-sm:text-xl">3 Bed</h3>
            <p className="text-xl leading-4 mt-2 max-sm:text-sm max-sm:leading-5 max-sm:mt-0">90sqm</p>
          </div>
        </div>
      </div>
      {/* Unit Details Content */}
      <div className="w-full grid grid-cols-12 justify-between items-start gap-4 max-md:grid-cols-full">
        {/* List */}
        <div className="col-span-4 p-5 bg-white w-full rounded-[40px] max-md:col-span-full">
          <div className="flex justify-start items-center py-2 gap-5 max-sm:gap-3">
            <h4 className="leading-4 font-bold text-2xl max-sm:text-base">Details</h4>
            <EditIcon className={"w-6 h-6 max-md:w-5 max-md:h-5 max-sm:w-4 max-sm:h-4 stroke-black fill-none"} />
          </div>
          <ul className="py-3 mt-5 max-sm:pt-0">
            <li className="flex justify-between items-center py-3 border-b-[0.25px] border-gray-400">
              <p className="leading-4 text-xl">Floor</p>
              <p className="leading-4 text-xl">0</p>
            </li>
            <li className="flex justify-between items-center py-3 border-b-[0.25px] border-gray-400">
              <p className="leading-4 text-xl">Bedrooms</p>
              <p className="leading-4 text-xl">0</p>
            </li>
            <li className="flex justify-between items-center py-3 border-b-[0.25px] border-gray-400">
              <p className="leading-4 text-xl">Bathrooms</p>
              <p className="leading-4 text-xl">0</p>
            </li>
            <li className="flex justify-between items-center py-3 border-b-[0.25px] border-gray-400">
              <p className="leading-4 text-xl">Net area</p>
              <p className="leading-4 text-xl">0</p>
            </li>
            <li className="flex justify-between items-center py-3 border-b-[0.25px] border-gray-400">
              <p className="leading-4 text-xl">Balcony</p>
              <p className="leading-4 text-xl">0</p>
            </li>
          </ul>
        </div>
        {/* Unit Details */}
        <div className="col-span-8 bg-white w-full rounded-[40px] p-6 min-h-[600px] relative max-md:col-span-full">
          <div className="flex justify-start items-center gap-5">
            <h3 className="text-4xl leading-10 font-bold max-sm:text-xl">Related unit</h3>
            <PlusIcon className={"w-6 h-6 max-md:w-5 max-md:h-5 max-sm:w-4 max-sm:h-4 fill-black "} />
          </div>

          <div className="text-center absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-full">
            <h3 className="text-4xl leading-10 font-bold max-sm:text-xl">Advanced Table</h3>
            <p className="leading-8 text-2xl max-sm:text-base">WIZIO Team will sort this out</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MasterTypeA;
