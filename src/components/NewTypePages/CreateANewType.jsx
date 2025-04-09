import React from "react";
import ProjectLogo from "../../svg/ProjectLogo";
import CloseIcon from "../../svg/CloseIcon";
import HomeIcon from "../../svg/HomeIcon";
import TownhouseIcon from "../../svg/TownhouseIcon";
import ApartmentsIcon from "../../svg/ApartmentsIcon";
const CreateANewType = () => {
  return (
    <div className="bg-gray-200 h-screen">
      <div className="h-full flex flex-col justify-between items-center w-full p-12 max-xl:px-5 max-lg:gap-10 max-md:px-4 max-sm:px-3">
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
        <div className="flex flex-col justify-center items-center w-full mx-auto">
          {/* Title */}
          <h3 className="font-bold text-4xl text-center">Create a New Type</h3>
          {/* Property Types */}
          <div className="flex flex-wrap justify-center items-center gap-4 w-full mt-6">
            <div className="w-52 py-5 border-[0.5px] border-black rounded-3xl">
              <HomeIcon className={"w-6 h-6 max-md:w-5 max-md:h-5 max-sm:w-4 max-sm:h-4 stroke-gray-600 stroke-[1.5px] fill-none mx-auto"} />
              <p className="text-gray-600 text-center">
                House or <br /> Bungalow
              </p>
            </div>

            <div className="w-52 py-5 border-[0.5px] border-black rounded-3xl">
              <TownhouseIcon className={"w-6 h-6 max-md:w-5 max-md:h-5 max-sm:w-4 max-sm:h-4 stroke-gray-600 stroke-[1.5px] fill-none mx-auto"} />
              <p className="text-gray-600 text-center">
                Semi-detached or <br /> Town house
              </p>
            </div>

            <div className="w-52 py-5 border-[0.5px] border-black rounded-3xl">
              <ApartmentsIcon className={"w-6 h-6 max-md:w-5 max-md:h-5 max-sm:w-4 max-sm:h-4 fill-gray-600 mx-auto"} />
              <p className="text-gray-600 text-center">
                Apartment or <br /> Block
              </p>
            </div>
          </div>
        </div>

        {/* Below Content */}
        <div className="w-full flex flex-col">
          <div className="flex justify-center items-center gap-2 w-full py-3">
            <div className="w-full h-1 bg-black"></div>
            <div className="w-full h-1 bg-white"></div>
            <div className="w-full h-1 bg-white"></div>
            <div className="w-full h-1 bg-white"></div>
            <div className="w-full h-1 bg-white"></div>
          </div>
          <div className="w-full flex justify-between items-center py-3">
            <button className="outline-none border-[0.5px] border-black rounded-full py-1.5 px-6">Back</button>
            <button className="outline-none border-[0.5px] border-black rounded-full py-1.5 px-6">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateANewType;
