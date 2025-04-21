import React from "react";
import ProjectLogo from "../../svg/ProjectLogo";
import CloseIcon from "../../svg/CloseIcon";
import DownArrowIcon from "../../svg/DownArrowIcon";

const AddPOI = () => {
  return (
    <div className="bg-[#E5E7EB] h-screen ">
      <div className="h-full flex flex-col justify-start items-center w-full p-12 max-xl:px-5 max-md:px-4 max-sm:px-3">
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
        <div className="flex flex-col justify-center items-center w-full max-w-lg mx-auto h-screen">
          {/* Title */}
          <h3 className="font-bold text-4xl text-center leading-10">Add Point of Interest</h3>

          {/* Inputs */}
          <div className="flex flex-col gap-10 mt-5 w-full">
            <input placeholder="Add a name" className="text-black placeholder:text-gray-400 outline-none bg-transparent border border-gray-400 p-5 py-3.5 rounded-full w-full leading-3" type="text" />

            <div className="relative">
              <select className="appearance-none text-black placeholder:text-gray-400 outline-none bg-transparent border border-gray-400 p-5 py-3 rounded-full w-full">
                <option value="category">Choose a category</option>
                <option value="category">Choose a category</option>
                <option value="category">Choose a category</option>
              </select>
              <DownArrowIcon className={"w-6 h-6 max-md:w-5 max-md:h-5 max-sm:w-4 max-sm:h-4 stroke-black fill-none absolute right-4 top-3.5"} />
            </div>

            <div>
              <input placeholder="Enter The coordinates " className="text-black outline-none bg-transparent border border-gray-400 p-5 py-3.5 rounded-full w-full leading-3" type="text" />
              <p className="text-gray-400 text-sm font-normal ml-5 mt-2">How to find coordinates</p>

              <div className="mt-5 px-5">
                <p className="font-bold text-gray-400">Get the coordinates for a place</p>
                <ol>
                  <li className="text-sm font-normal text-gray-400">On your computer, open Google Maps.</li>
                  <li className="text-sm font-normal text-gray-400">Right-click the place or area on the map.</li>
                  <li className="text-sm font-normal text-gray-400">This will open a pop-up window. You can find your latitude and longitude in decimal format at the top.</li>
                  <li className="text-sm font-normal text-gray-400">To copy the coordinates automatically, left click on the latitude and longitude.</li>
                  <li className="text-sm font-normal text-gray-400">Paste above.</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPOI;
