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

const MasterTypeA = () => {
  return (
    <div className="bg-gray-200">
      <div className="h-full flex flex-col justify-start items-center w-full p-12 max-xl:px-5 max-lg:gap-10 max-md:px-4 max-sm:px-3">
        {/* Upper Content */}
        <div className="w-full flex justify-between items-center">
          <ProjectLogo className={"w-12 h-8 fill-black"} />

          <div className="flex justify-center items-center gap-12">
            <p className="text-xl leading-7 underline underline-offset-[16px]">Overview</p>
            <p className="text-xl leading-7">Clients</p>
            <p className="text-xl leading-7">Team</p>
            <button className="bg-lime-500 flex justify-center items-center gap-2.5 rounded-full py-1.5 px-4">
              <PortalIcon className={"w-5 h-5 fill-black"} />
              <p>Portal</p>
            </button>
          </div>

          <div className="flex justify-start items-center gap-5">
            <DarkModeIcon className={"w-5 h-5 stroke-black stroke-[1.5px] fill-none"} />
            <GlobalIcon className={"w-5 h-5  fill-black"} />
            <NotificationIcon className={"w-5 h-5  stroke-black fill-none "} />
            <UserIcon className={"w-5 h-5 stroke-black fill-none "} />
          </div>
        </div>
        {/* Type Title Content */}
        <div className="flex justify-between items-center w-full my-5">
          <h3 className="text-4xl font-bold">Master Type A</h3>

          <div className="flex justify-start items-center gap-5">
            <button className="outline-none border-[0.5px] border-black rounded-full py-1 px-5 text-2xl">Date</button>
            <button className="w-9 h-9 flex justify-center items-center outline-none border-[0.5px] border-black rounded-full">
              <FileUploadIcon className={"w-4 h-4 stroke-black stroke-[1.5px] fill-none"} />
            </button>
          </div>
        </div>
        {/* Type Details Content */}
        <div className="flex justify-start items-center gap-12 w-full my-10 max-w-[928px]">
          <div className="rounded-[40px] overflow-hidden">
            <img src={masterTypeAImage} alt="masterTypeAImage" />
          </div>
          <div className="flex flex-col justify-between items-start gap-12">
            <div className="relative pr-6">
              <h2 className="font-bold text-5xl leading-10">Master Type A</h2>
              <p className="text-xl leading-4 mt-2">Flat</p>
              <EditIcon className={"w-4 h-4 stroke-black fill-none absolute top-0 right-0"} />
            </div>

            <div>
              <h3 className="font-bold text-4xl leading-7">3 Bed</h3>
              <p className="text-xl leading-4 mt-2">90sqm</p>
            </div>
          </div>
        </div>
        {/* Unit Details Content */}
        <div className="w-full grid grid-cols-3 justify-between items-start max-w-[928px] gap-4">
          {/* List */}
          <div className="col-span-1 p-5 bg-white w-full rounded-[40px]">
            <div className="flex justify-start items-center py-2 gap-5">
              <h4 className="leading-4 font-bold text-2xl">Details</h4>
              <EditIcon className={"w-4 h-4 stroke-black fill-none"} />
            </div>
            <ul className="py-3 mt-5">
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
          <div className="col-span-2 bg-white w-full rounded-[40px] p-6 min-h-[600px] relative">
            <div className="flex justify-start items-center gap-5">
              <h3 className="text-4xl leading-10 font-bold">Related unit</h3>
              <PlusIcon className={"w-6 h-6 fill-black "} />
            </div>

            <div className="text-center absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-full">
              <h3 className="text-4xl leading-10 font-bold">Advanced Table</h3>
              <p className="leading-8 text-2xl">WIZIO Team will sort this out</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MasterTypeA;
