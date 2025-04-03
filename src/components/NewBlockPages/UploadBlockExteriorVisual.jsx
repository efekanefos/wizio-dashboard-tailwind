import React, { useState } from "react";
import ProjectLogo from "../../svg/ProjectLogo";
import CloseIcon from "../../svg/CloseIcon";
import MiniCloseIcon from "../../svg/MiniCloseIcon";
import uploadBlockExteriorVisual from "../../svg/uploadBlockExteriorVisual.png";

const UploadBlockExteriorVisual = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };
  return (
    <div className="bg-[#E5E7EB] h-screen">
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
        <div className="flex flex-col justify-center items-center w-full max-w-[632px] mx-auto h-screen">
          {/* Title */}
          <h3 className="font-bold text-4xl text-center leading-10">Upload Exterior Visual</h3>
          <p className="leading-6 text-gray-400 text-sm">Only single image allowed at this section</p>

          <div className="relative w-48 h-32 rounded-[32px] overflow-hidden my-12">
            <img className="w-full h-full object-cover" src={uploadBlockExteriorVisual} alt="livingroom" />
            <MiniCloseIcon className={"w-6 h-6 max-md:w-5 max-md:h-5 max-sm:w-4 max-sm:h-4 absolute top-3.5 right-3.5"} />
          </div>

          <div className="flex justify-between items-center w-full py-3.5">
            <p className="text-black leading-6">Save as Master Type</p>

            <label className={`relative w-10 h-3.5 rounded-full cursor-pointer transition-colors duration-300 ${isChecked ? "bg-gray-400" : "bg-gray-400"}`}>
              <input type="checkbox" className="hidden" checked={isChecked} onChange={handleCheckboxChange} />
              <span className={`absolute w-5 h-5 top-[7px] translate-y-[-50%] left-0 bg-gray-600 rounded-full shadow-md transform transition-transform duration-300 ${isChecked ? "translate-x-[22px]" : "translate-x-0"}`}></span>
            </label>
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
            <button className="outline-none border-[0.5px] border-black rounded-full py-0.5 px-4">Finished</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadBlockExteriorVisual;
