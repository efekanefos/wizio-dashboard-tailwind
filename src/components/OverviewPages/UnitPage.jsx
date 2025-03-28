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
import MobileHamburgerIcon from "../../svg/MobileHamburgerIcon";
import FavouriteIcon from "../../svg/FavouriteIcon";
import overviewChart from "../../svg/overviewChart.png";

const UnitPage = () => {
  return (
    <div className="p-12 max-md:p-6 max-sm:p-4">
      {/* Header Content */}
      <div className="w-full flex justify-between items-center">
        <ProjectLogo className={"w-12 h-8 fill-black"} />

        <div className="flex justify-center items-center gap-12 max-md:hidden">
          <p className="text-xl leading-7 underline underline-offset-[16px]">Overview</p>
          <p className="text-xl leading-7">Clients</p>
          <p className="text-xl leading-7">Team</p>
          <button className="bg-lime-500 flex justify-center items-center gap-2.5 rounded-full py-1.5 px-4">
            <PortalIcon className={"w-6 h-6 fill-black"} />
            <p>Portal</p>
          </button>
        </div>

        <div className="flex justify-start items-center gap-5 max-md:hidden">
          <DarkModeIcon className={"w-6 h-6 stroke-black stroke-[1.5px] fill-none"} />
          <GlobalIcon className={"w-6 h-6  fill-black"} />
          <NotificationIcon className={"w-6 h-6  stroke-black fill-none "} />
          <UserIcon className={"w-6 h-6 stroke-black fill-none "} />
        </div>

        <MobileHamburgerIcon className={"hidden max-md:block w-5 h-5 stroke-black stroke-2"} />
      </div>

      {/* Type Title Content */}
      <div className="flex justify-between items-center w-full mt-5">
        <h3 className="text-4xl font-bold leading-10 max-md:text-2xl">UNIT A</h3>

        <div className="flex justify-start items-center gap-5">
          <button className="outline-none border-[0.5px] border-black rounded-full py-0.5 px-4 text-base leading-6">Date</button>
          <button className="w-7 h-7 flex justify-center items-center outline-none border-[0.5px] border-black rounded-full">
            <FileUploadIcon className={"w-4 h-4 stroke-black stroke-[1.5px] fill-none"} />
          </button>
        </div>
      </div>

      {/* Type Details Content */}
      <div className="flex justify-start items-center gap-12 w-full my-20 max-w-[928px] max-md:mt-7 max-md:mb-11 max-md:gap-4 max-sm:gap-3">
        <div className="rounded-[40px] overflow-hidden min-w-32">
          <img className="max-sm:max-w-32 w-full h-full" src={masterTypeAImage} alt="masterTypeAImage" />
        </div>
        <div className="flex justify-start items-start">
          <div className="flex flex-col justify-between items-start gap-9 border-r-2 pr-12 border-black max-md:gap-10 max-sm:gap-6 max-md:pr-10 max-sm:pr-4">
            <div className="relative pr-6">
              <h2 className="font-bold text-5xl max-md:text-4xl max-sm:text-2xl">Unit 101</h2>
              <div className="flex justify-start items-center gap-3 mt-2 max-md:mt-0">
                <p className="text-xl leading-4 max-md:text-xl max-sm:text-base">Available</p>
                <div className="w-4 h-4 rounded-full bg-lime-500"></div>
              </div>
              <EditIcon className={"w-4 h-4 stroke-black fill-none absolute top-0 right-0"} />
            </div>

            <div className="flex justify-start items-start">
              <div className="pr-5">
                <h1 className="text-4xl leading-10 font-bold max-md:text-2xl">€354,950</h1>
                <p className="text-xl leading-8 max-md:text-base max-sm:text-sm">%5 Commission </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between items-start gap-9 pl-12 max-md:gap-10 max-sm:gap-6 max-md:pl-10 max-sm:pl-4">
            <div>
              <h2 className="font-bold text-5xl max-md:text-4xl max-sm:text-2xl">455</h2>
              <p className="text-xl leading-4 mt-2 max-md:text-xl max-md:mt-0 max-sm:text-base">View</p>
            </div>

            <div className="flex justify-start items-start">
              <div className="pr-5">
                <div className="flex justify-start items-start gap-1">
                  <h1 className="text-4xl leading-10 font-bold max-md:text-2xl">54</h1>
                  <FavouriteIcon className="w-6 h-6 fill-red-500 mt-1" />
                </div>
                <p className="text-xl leading-8 max-md:text-base">Favourites</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Details and Visitor Chart Content */}
      <div className="flex justify-between items-start gap-5 max-md:flex-col">
        {/* List */}
        <div className="p-5 bg-white bg-opacity-75 w-full rounded-[40px] max-w-72 max-md:max-w-full">
          <div className="flex justify-start items-center gap-5">
            <h4 className="leading-10 font-bold text-4xl">Details</h4>
            <EditIcon className={"w-6 h-6 stroke-black fill-none"} />
          </div>
          <ul className="mt-5">
            <li className="flex justify-between items-center py-2 border-b-[0.25px] border-gray-400">
              <p className="leading-7 text-xl">Floor</p>
              <p className="leading-10 text-4xl font-bold">0</p>
            </li>
            <li className="flex justify-between items-center py-2 border-b-[0.25px] border-gray-400">
              <p className="leading-7 text-xl">Bedrooms</p>
              <p className="leading-10 text-4xl font-bold">0</p>
            </li>
            <li className="flex justify-between items-center py-2 border-b-[0.25px] border-gray-400">
              <p className="leading-7 text-xl">Bathrooms</p>
              <p className="leading-10 text-4xl font-bold">0</p>
            </li>
            <li className="flex justify-between items-center py-2 border-b-[0.25px] border-gray-400">
              <p className="leading-7 text-xl">Net area</p>
              <p className="leading-10 text-4xl font-bold">0</p>
            </li>
            <li className="flex justify-between items-center py-2 border-b-[0.25px] border-gray-400">
              <p className="leading-7 text-xl">Balcony</p>
              <p className="leading-10 text-4xl font-bold">0</p>
            </li>
          </ul>
        </div>
        <div className="p-6 flex flex-col bg-white bg-opacity-75 rounded-[40px] w-full">
          <h3 className="text-4xl leading-10 font-bold mb-7 max-md:text-2xl max-sm:text-xl">Unique Visitors</h3>
          <img className="min-h-[300px] object-cover object-left" src={overviewChart} alt="overviewChart" />
        </div>
      </div>
      {/* Most Views & Favourites Container */}
      <div className="my-5 flex justify-between items-start gap-5 w-full max-md:flex-col">
        <div className="relative p-6 bg-white bg-opacity-75 rounded-[40px] w-full min-h-96">
          <h3 className="text-4xl leading-10 font-bold max-md:text-2xl max-sm:text-xl">Most Views</h3>

          <div className="text-center absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-full">
            <h3 className="text-4xl leading-10 font-bold max-md:text-2xl max-sm:text-xl">Advanced Table</h3>
            <p className="leading-8 text-2xl max-md:text-xl max-sm:text-base">WIZIO Team will sort this out</p>
          </div>
        </div>

        <div className="relative p-6 bg-white bg-opacity-75 rounded-[40px] w-full min-h-96">
          <div className="flex justify-start items-center gap-5">
            <h3 className="text-4xl leading-10 font-bold max-md:text-2xl max-sm:text-xl">Favourites</h3>
            <FavouriteIcon className="w-8 h-8 fill-red-500 mt-1" />
          </div>

          <div className="text-center absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-full">
            <h3 className="text-4xl leading-10 font-bold max-md:text-2xl max-sm:text-xl">Advanced Table</h3>
            <p className="leading-8 text-2xl max-md:text-xl max-sm:text-base">WIZIO Team will sort this out</p>
          </div>
        </div>
      </div>
      {/* Activities Container */}
      <div className="relative p-6 bg-white bg-opacity-75 rounded-[40px] min-h-[688px]">
        <h3 className="text-4xl leading-10 font-bold max-md:text-2xl max-sm:text-xl">Activities</h3>

        <div className="text-center absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-full">
          <h3 className="text-4xl leading-10 font-bold max-md:text-2xl max-sm:text-xl">Advanced Table</h3>
          <p className="leading-8 text-2xl max-md:text-xl max-sm:text-base">WIZIO Team will sort this out</p>
        </div>
      </div>
    </div>
  );
};

export default UnitPage;
