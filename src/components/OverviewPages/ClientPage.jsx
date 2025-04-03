import React from "react";
import ProjectLogo from "../../svg/ProjectLogo";
import DarkModeIcon from "../../svg/DarkModeIcon";
import GlobalIcon from "../../svg/GlobalIcon";
import NotificationIcon from "../../svg/NotificationIcon";
import UserIcon from "../../svg/UserIcon";
import PortalIcon from "../../svg/PortalIcon";
import FileUploadIcon from "../../svg/FileUploadIcon";
import MobileHamburgerIcon from "../../svg/MobileHamburgerIcon";
import PlusIcon from "../../svg/PlusIcon";

const ClientPage = () => {
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
          <UserIcon className={"w-6 h-6 max-md:w-5 max-md:h-5 max-sm:w-4 max-sm:h-4 stroke-black fill-none "} />
        </div>

        <MobileHamburgerIcon className={"hidden max-md:block w-6 h-6 max-md:w-5 max-md:h-5 max-sm:w-4 max-sm:h-4 stroke-black stroke-2"} />
      </div>

      {/* Type Title Content */}
      <div className="flex justify-between items-center w-full mt-5">
        <h3 className="text-4xl font-bold leading-10 max-md:text-2xl">Clients</h3>

        <div className="flex justify-start items-center gap-5">
          <button className="outline-none border-[0.5px] border-black rounded-full py-0.5 px-4 text-base leading-6">Date</button>
          <button className="w-9 h-9 flex justify-center items-center outline-none border-[0.5px] border-black rounded-full">
            <FileUploadIcon className={"w-6 h-6 max-md:w-5 max-md:h-5 max-sm:w-4 max-sm:h-4 stroke-black stroke-[1.5px] fill-none"} />
          </button>
        </div>
      </div>

      {/* Client Data */}
      <div className="my-20 flex justify-start items-start max-md:mt-7 max-md:mb-11">
        <div className="flex flex-col gap-3 pr-12 border-r-2 border-black max-md:pr-10 max-sm:pr-4 max-md:gap-1">
          <h1 className="text-8xl font-bold leading-[70px] max-md:text-4xl max-sm:text-2xl">3034</h1>
          <p className="text-xl leading-4 max-md:text-xl max-sm:text-base">Total Client</p>
        </div>

        <div className="flex flex-col gap-3 px-12 border-r-2 border-black max-md:px-10 max-sm:px-4 max-md:gap-1">
          <h1 className="text-8xl font-bold leading-[70px] max-md:text-4xl max-sm:text-2xl">357</h1>
          <p className="text-xl leading-4 max-md:text-xl max-sm:text-base">Hot Lead</p>
        </div>

        <div className="flex flex-col gap-3 pl-12 max-md:pl-10 max-sm:pl-4 max-md:gap-1">
          <h1 className="text-8xl font-bold leading-[70px] max-md:text-4xl max-sm:text-2xl">128</h1>
          <p className="text-xl leading-4 max-md:text-xl max-sm:text-base">New Lead</p>
        </div>
      </div>

      {/* Activities Container */}
      <div className="relative p-6 bg-white bg-opacity-75 rounded-[40px] min-h-[688px]">
        <div className="flex justify-start items-center gap-5">
          <h3 className="text-4xl leading-10 font-bold max-md:text-2xl max-sm:text-xl">Clients</h3>
          <PlusIcon className={"w-6 h-6 fill-black"} />
        </div>

        <div className="text-center absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-full">
          <h3 className="text-4xl leading-10 font-bold max-md:text-2xl max-sm:text-xl">Advanced Table</h3>
          <p className="leading-8 text-2xl max-md:text-xl max-sm:text-base">WIZIO Team will sort this out</p>
        </div>
      </div>
    </div>
  );
};

export default ClientPage;
