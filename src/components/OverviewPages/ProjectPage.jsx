import React from "react";
import ProjectLogo from "../../svg/ProjectLogo";
import DarkModeIcon from "../../svg/DarkModeIcon";
import GlobalIcon from "../../svg/GlobalIcon";
import NotificationIcon from "../../svg/NotificationIcon";
import UserIcon from "../../svg/UserIcon";
import PortalIcon from "../../svg/PortalIcon";
import FileUploadIcon from "../../svg/FileUploadIcon";
import EditIcon from "../../svg/EditIcon";
import masterTypeAImage from "../../svg/masterTypeAImage.png";

const OverviewPage = () => {
  return (
    <div className="p-12 max-xl:px-5 max-md:px-4 max-sm:px-3">
      {/* Header Content */}
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
        <h3 className="text-4xl font-bold leading-10">Project A</h3>

        <div className="flex justify-start items-center gap-5">
          <button className="outline-none border-[0.5px] border-black rounded-full py-0.5 px-4 text-base leading-6">Date</button>
          <button className="w-7 h-7 flex justify-center items-center outline-none border-[0.5px] border-black rounded-full">
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
    </div>
  );
};

export default OverviewPage;
