import React from "react";
import ProjectLogo from "../../svg/ProjectLogo";
import CloseIcon from "../../svg/CloseIcon";
import DownArrowIcon from "../../svg/DownArrowIcon";

const ChangePOI = () => {
  return (
    <div className="bg-[#E5E7EB] h-screen ">
      <div className="h-full flex flex-col justify-start items-center w-full max-w-[1024px] mx-auto p-12 max-xl:px-5 max-md:px-4 max-sm:px-3">
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
          <h3 className="font-bold text-4xl text-center leading-10">Change Point of Interest</h3>

          {/* Inputs */}
          <div className="flex flex-col gap-10 mt-5 w-full">
            <input value="Greek Taverna" readOnly className="text-black placeholder:text-gray-400 outline-none bg-transparent border border-gray-400 p-5 py-3.5 rounded-full w-full leading-3" type="text" />

            <div className="relative">
              <select className=" appearance-none text-black placeholder:text-gray-400 outline-none bg-transparent border border-gray-400 p-5 py-3 rounded-full w-full">
                <option value="Restaurant">Restaurant</option>
                <option value="Restaurant">Restaurant</option>
                <option value="Restaurant">Restaurant</option>
              </select>
              <DownArrowIcon className={"w-4 h-2 stroke-black fill-none absolute right-4 top-[21px]"} />
            </div>

            <div>
              <input value="50.721995598691436, -1.871064833848868" readOnly className="text-black outline-none bg-transparent border border-gray-400 p-5 py-3.5 rounded-full w-full leading-3" type="text" />
              <p className="text-gray-400 text-sm font-normal ml-5 mt-2">Hint</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePOI;
