import React from "react";
import ProjectLogo from "../../svg/ProjectLogo";
import CloseIcon from "../../svg/CloseIcon";
import DownArrowIcon from "../../svg/DownArrowIcon";

const EditUnitA = () => {
  return (
    <div className="bg-[#E5E7EB] h-screen ">
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
          <h3 className="font-bold text-4xl text-center leading-10">Edit Unit A</h3>

          {/* Content */}
          <div className="flex flex-col gap-5 mt-5 w-full">
            <div className="py-2 border-b border-black">
              <p className="leading-6">This unit was created using Master Type A. To customise this unit, please choose one of the options below</p>
            </div>

            <div className="py-3">
              <div className="flex justify-between items-center">
                <p className="leading-6">Add More Information</p>
                <input className="appearance-none bg-transparent w-4 h-4 border border-gray-600 rounded-full focus:border-[6px]" type="radio" />
              </div>
              <p className="text-sm text-gray-400">Enhance the unit by adding features or images without changing core details.</p>
            </div>

            <div className="py-3">
              <div className="flex justify-between items-center">
                <p className="leading-6">Overwrite Existing Details</p>
                <input className="appearance-none bg-transparent w-4 h-4 border border-gray-600 rounded-full focus:border-[6px]" type="radio" />
              </div>
              <p className="text-sm text-gray-400">Directly modify core attributes like floor plans, images, or features.</p>
            </div>
          </div>
        </div>

        {/* Below Content */}
        <div className="w-full flex flex-col">
          <div className="flex justify-center items-center gap-2 w-full py-3">
            <div className="w-full h-1 bg-black"></div>
            <div className="w-full h-1 bg-black"></div>
            <div className="w-full h-1 bg-white"></div>
            <div className="w-full h-1 bg-white"></div>
            <div className="w-full h-1 bg-white"></div>
          </div>
          <div className="w-full flex justify-between items-center py-3">
            <button className="outline-none border-[0.5px] border-black rounded-full py-0.5 px-4">Back</button>
            <button className="outline-none border-[0.5px] border-black rounded-full py-0.5 px-4">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditUnitA;
