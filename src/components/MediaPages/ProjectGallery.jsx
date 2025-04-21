import React from "react";
import ProjectLogo from "../../svg/ProjectLogo";
import CloseIcon from "../../svg/CloseIcon";
import PlusIcon from "../../svg/PlusIcon";
import HomeIcon from "../../svg/HomeIcon";
import FurnitureIcon from "../../svg/FurnitureIcon";
import SocialAreaIcon from "../../svg/SocialAreaIcon";
import Tour360Icon from "../../svg/Tour360Icon";
import BrochureIcon from "../../svg/BrochureIcon";
import VideoIcon from "../../svg/VideoIcon";
const ProjectGallery = () => {
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
        <div className="flex flex-col justify-center items-center w-full max-w-2xl mx-auto mt-3">
          {/* Title */}
          <h3 className="font-bold text-4xl text-center leading-10">Project Gallery</h3>

          {/* Property Types */}
          <div className="grid grid-cols-4 place-items-center justify-center items-center gap-4 w-full mt-5 max-md:flex max-md:flex-wrap">
            <div className="w-40 h-28 flex flex-col justify-center items-center gap-1 py-5 border-[0.5px] border-black rounded-3xl">
              <HomeIcon className={"w-6 h-6 max-md:w-5 max-md:h-5 max-sm:w-4 max-sm:h-4 stroke-gray-600 stroke-[1.5px] fill-none"} />
              <p className="text-gray-600 text-center leading-6">Exterior Visuals</p>
            </div>
            <div className="w-40 h-28 flex flex-col justify-center items-center gap-1 py-5 border-[0.5px] border-black rounded-3xl">
              <FurnitureIcon className={"w-6 h-6 max-md:w-5 max-md:h-5 max-sm:w-4 max-sm:h-4 stroke-gray-600 stroke-[1.5px] fill-none"} />
              <p className="text-gray-600 text-center leading-6">Exterior Visuals</p>
            </div>
            <div className="w-40 h-28 flex flex-col justify-center items-center gap-1 py-5 border-[0.5px] border-black rounded-3xl">
              <SocialAreaIcon className={"w-6 h-6 max-md:w-5 max-md:h-5 max-sm:w-4 max-sm:h-4 stroke-gray-600 stroke-[1.5px] fill-none"} />
              <p className="text-gray-600 text-center leading-6">Social Area Visuals</p>
            </div>
            <div className="w-40 h-28 flex flex-col justify-center items-center gap-1 py-5 border-[0.5px] border-black rounded-3xl">
              <Tour360Icon className={"w-6 h-6 max-md:w-5 max-md:h-5 max-sm:w-4 max-sm:h-4 stroke-gray-600 stroke-[1.5px] fill-none"} />
              <p className="text-gray-600 text-center leading-6">360 Tours</p>
            </div>
            <div className="w-40 h-28 flex flex-col justify-center items-center gap-1 py-5 border-[0.5px] border-black rounded-3xl">
              <BrochureIcon className={"w-6 h-6 max-md:w-5 max-md:h-5 max-sm:w-4 max-sm:h-4 stroke-gray-600 fill-none"} />
              <p className="text-gray-600 text-center leading-6">Brochures</p>
            </div>
            <div className="w-40 h-28 flex flex-col justify-center items-center gap-1 py-5 border-[0.5px] border-black rounded-3xl">
              <VideoIcon className={"w-6 h-6 max-md:w-5 max-md:h-5 max-sm:w-4 max-sm:h-4 stroke-gray-600 fill-none"} />
              <p className="text-gray-600 text-center leading-6">Videos</p>
            </div>
            <div className="w-40 h-28 flex flex-col justify-center items-center gap-1 py-5 border-[0.5px] border-black rounded-3xl">
              <PlusIcon className={"w-6 h-6 max-md:w-5 max-md:h-5 max-sm:w-4 max-sm:h-4 fill-gray-600"} />
              <p className="text-gray-600 text-center leading-6">Add New</p>
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
            <button className="outline-none border-[0.5px] border-black rounded-full py-1.5 px-6">Back</button>
            <button className="outline-none border-[0.5px] border-black rounded-full py-1.5 px-6">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectGallery;
