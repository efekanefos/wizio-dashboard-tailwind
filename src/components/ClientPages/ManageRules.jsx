import React, { useState } from "react";
import ProjectLogo from "../../svg/ProjectLogo";
import CloseIcon from "../../svg/CloseIcon";

const ManageRules = () => {
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

            <button className="w-7 h-7 flex justify-center items-center outline-none border-[0.5px] border-black rounded-full">
              <CloseIcon className={"w-4 h-4 stroke-black stroke-2"} />
            </button>
          </div>
        </div>
        {/* Main Content */}
        <div className="flex flex-col justify-center items-center w-full max-w-[632px] mx-auto h-screen">
          {/* Title */}
          <h3 className="font-bold text-4xl text-center">Assign to</h3>

          {/* Inputs */}
          <div className="flex flex-col gap-5 w-full mt-5">
            <input className="placeholder:text-gray-400 text-black outline-none bg-transparent border border-gray-400 p-5 py-3.5 rounded-full w-full leading-3" type="text" placeholder="Name this Rule" />

            <div className="flex justify-between items-center pt-6 pb-10 border-b border-black">
              <p className="text-xl leading-7 font-bold">Clients</p>

              <label className={`relative w-10 h-3.5 rounded-full cursor-pointer transition-colors duration-300 ${isChecked ? "bg-gray-400" : "bg-gray-400"}`}>
                <input type="checkbox" className="hidden" checked={isChecked} onChange={handleCheckboxChange} />
                <span className={`absolute w-5 h-5 top-[7px] translate-y-[-50%] left-0 bg-gray-600 rounded-full shadow-md transform transition-transform duration-300 ${isChecked ? "translate-x-[22px]" : "translate-x-0"}`}></span>
              </label>
            </div>

            <div className="flex justify-between items-center pt-6 pb-10 border-b border-black">
              <p className="text-xl leading-7 font-bold">Properties</p>

              <label className={`relative w-10 h-3.5 rounded-full cursor-pointer transition-colors duration-300 ${isChecked ? "bg-gray-400" : "bg-gray-400"}`}>
                <input type="checkbox" className="hidden" checked={isChecked} onChange={handleCheckboxChange} />
                <span className={`absolute w-5 h-5 top-[7px] translate-y-[-50%] left-0 bg-gray-600 rounded-full shadow-md transform transition-transform duration-300 ${isChecked ? "translate-x-[22px]" : "translate-x-0"}`}></span>
              </label>
            </div>

            <div className="flex justify-between items-center pt-6 pb-10 border-b border-black">
              <p className="text-xl leading-7 font-bold">Team</p>

              <label className={`relative w-10 h-3.5 rounded-full cursor-pointer transition-colors duration-300 ${isChecked ? "bg-gray-400" : "bg-gray-400"}`}>
                <input type="checkbox" className="hidden" checked={isChecked} onChange={handleCheckboxChange} />
                <span className={`absolute w-5 h-5 top-[7px] translate-y-[-50%] left-0 bg-gray-600 rounded-full shadow-md transform transition-transform duration-300 ${isChecked ? "translate-x-[22px]" : "translate-x-0"}`}></span>
              </label>
            </div>

            <div className="flex justify-between items-center pt-6 pb-10 border-b border-black">
              <p className="text-xl leading-7 font-bold">Settings</p>

              <label className={`relative w-10 h-3.5 rounded-full cursor-pointer transition-colors duration-300 ${isChecked ? "bg-gray-400" : "bg-gray-400"}`}>
                <input type="checkbox" className="hidden" checked={isChecked} onChange={handleCheckboxChange} />
                <span className={`absolute w-5 h-5 top-[7px] translate-y-[-50%] left-0 bg-gray-600 rounded-full shadow-md transform transition-transform duration-300 ${isChecked ? "translate-x-[22px]" : "translate-x-0"}`}></span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageRules;
