import React from "react";
import ProjectLogo from "../../svg/ProjectLogo";
import CloseIcon from "../../svg/CloseIcon";
import DownArrowIcon from "../../svg/DownArrowIcon";

const AssignTo = () => {
  return (
    <div className="bg-[#E5E7EB] h-screen">
      <div className="h-full flex flex-col justify-between items-center w-full p-12 max-xl:px-5 max-md:px-4 max-sm:px-3">
        {/* Upper Content */}
        <div className="w-full flex justify-between items-center">
          <ProjectLogo className={"w-12 h-8 fill-black"} />

          <div className="flex justify-between items-center gap-5">
            <button className="outline-none border-[0.5px] border-black rounded-full py-0.5 px-4">Save & Exit</button>

            <button className="w-7 h-7 flex justify-center items-center outline-none border-[0.5px] border-black rounded-full">
              <CloseIcon className={"w-4 h-4 stroke-black stroke-2"} />
            </button>
          </div>
        </div>
        {/* Main Content */}
        <div className="flex flex-col justify-center items-center w-full max-w-[632px] mx-auto h-screen">
          {/* Title */}
          <h3 className="font-bold text-4xl text-center">Assign to</h3>

          <div className="relative w-full mt-5">
            <select className="appearance-none text-gray-400 outline-none bg-transparent border border-gray-400 p-5 py-3 rounded-full w-full">
              <option value="ClientType">Client Type</option>
              <option value="ClientType">Client Type</option>
              <option value="ClientType">Client Type</option>
            </select>
            <DownArrowIcon className={"w-4 h-2 stroke-black fill-none absolute right-4 top-[21px]"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignTo;
