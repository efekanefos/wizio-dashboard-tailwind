import React from "react";
import ProjectLogo from "../../svg/ProjectLogo";
import CloseIcon from "../../svg/CloseIcon";

const Add360Links = () => {
  return (
    <div className="bg-[#E5E7EB] h-screen ">
      <div className="h-full flex flex-col justify-between items-center w-full p-12 max-xl:px-5 max-md:px-4 max-sm:px-3">
        {/* Upper Content */}
        <div className="w-full flex justify-between items-center">
          <ProjectLogo className={"w-12 h-8 fill-black"} />

          <div className="flex justify-between items-center gap-5">
            <button className="outline-none border-[0.5px] border-black rounded-full py-0.5 px-4">Save & Exit</button>

            <button className="w-9 h-9 flex justify-center items-center outline-none border-[0.5px] border-black rounded-full">
              <CloseIcon className={"w-6 h-6 max-md:w-5 max-md:h-5 max-sm:w-4 max-sm:h-4 stroke-black stroke-2"} />
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col justify-center items-center w-full  mx-auto">
          {/* Title */}
          <h3 className="font-bold text-4xl text-center">Add 360 Links</h3>

          {/* Inputs */}
          <div className="flex flex-col gap-10 mt-6 w-full max-w-[630px] mx-auto">
            <input className="text-gray-400 outline-none bg-transparent border border-gray-400 p-5 py-3.5 rounded-full w-full leading-3" type="text" placeholder="Name this tour" />

            <input className="text-gray-400 outline-none bg-transparent border border-gray-400 p-5 py-3.5 rounded-full w-full leading-3" type="text" placeholder="Please add html link here" />
          </div>
          <button className="text-white bg-black w-fit py-0.5 px-4 rounded-full mt-14">Add new 360</button>
        </div>

        {/* Below Content */}
        <div className="w-full flex flex-col">
          <div className="flex justify-center items-center gap-2 w-full py-3">
            <div className="w-full h-1 bg-black"></div>
            <div className="w-full h-1 bg-black"></div>
            <div className="w-full h-1 bg-black"></div>
            <div className="w-full h-1 bg-black"></div>
            <div className="w-full h-1 bg-black"></div>
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

export default Add360Links;
