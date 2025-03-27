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
import overviewChart from "../../svg/overviewChart.png";
import overviewPieChart from "../../svg/overviewPieChart.png";
import PlusIcon from "../../svg/PlusIcon";
import ThreeDotIcon from "../../svg/ThreeDotIcon";
import ReorderIcon from "../../svg/ReorderIcon";
import ColumnIcon from "../../svg/ColumnIcon";
import FilterIcon from "../../svg/FilterIcon";
import DownArrowIcon from "../../svg/DownArrowIcon";
import projectPageBuildingImg from "../../svg/projectPageBuildingImg.png";
import MobileHamburgerIcon from "../../svg/MobileHamburgerIcon";

const ProjectPage = () => {
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
        <h3 className="text-4xl font-bold leading-10 max-md:text-2xl">Project A</h3>

        <div className="flex justify-start items-center gap-5">
          <button className="outline-none border-[0.5px] border-black rounded-full py-0.5 px-4 text-base leading-6">Date</button>
          <button className="w-7 h-7 flex justify-center items-center outline-none border-[0.5px] border-black rounded-full">
            <FileUploadIcon className={"w-4 h-4 stroke-black stroke-[1.5px] fill-none"} />
          </button>
        </div>
      </div>
      {/* Type Details Content */}
      <div className="flex justify-start items-center gap-12 w-full my-20 max-w-[928px] max-md:mt-7 max-md:mb-11 max-md:gap-4 max-sm:gap-3">
        <div className="rounded-[40px] overflow-hidden">
          <img src={masterTypeAImage} alt="masterTypeAImage" />
        </div>
        <div className="flex flex-col justify-between items-start gap-12 max-md:gap-10 max-sm:gap-8">
          <div className="relative pr-6">
            <h2 className="font-bold text-5xl leading-10 max-md:text-4xl">Project A</h2>
            <p className="text-xl leading-4 mt-2 max-md:text-xl">Paphos</p>
            <EditIcon className={"w-4 h-4 stroke-black fill-none absolute top-0 right-0"} />
          </div>

          <div className="flex justify-start items-start">
            <div className="border-r-2 border-black pr-5">
              <h1 className="text-4xl font-bold max-md:text-2xl">
                €520.32 <span className="text-4xl max-md:text-xl">m</span>
              </h1>
              <p className="text-xl leading-8 max-md:text-base">Revenue</p>
            </div>
            <div className="pl-5">
              <h1 className="text-4xl font-bold max-md:text-2xl">85%</h1>
              <p className="text-xl leading-8 max-md:text-xl">Sold</p>
            </div>
          </div>
        </div>
      </div>
      {/* Charts */}
      <div className="grid grid-cols-6 justify-between items-start gap-5 mb-5 max-sm:grid-cols-1">
        <div className="col-span-2 p-6 bg-white bg-opacity-75 rounded-[40px] h-full w-full max-sm:col-span-full">
          <h3 className="text-4xl leading-10 font-bold max-md:text-2xl max-sm:text-xl">Unit Status</h3>
          <div className="max-sm:flex">
            <div className="flex justify-center items-center relative w-fit mx-auto my-5">
              <img className="max-sm:w-32" src={overviewPieChart} alt="overviewPieChart" />
              <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-center">
                <p className="text-2xl font-bold leading-6 max-md:text-xs">
                  Total Unit <br /> <span className="text-xl leading-7 max-md:text-base">240</span>
                </p>
              </div>
              <div className="absolute -top-5 right-3 bg-white rounded-full w-20 h-20 flex justify-center items-center text-center max-md:w-10 max-md:h-10 max-md:top-3 max-md:right-3 max-sm:-right-2 max-sm:top-0">
                <h5 className="text-xl leading-7 font-bold max-md:text-xs">53%</h5>
              </div>
            </div>
            <div className="flex flex-wrap mx-auto max-w-56 justify-center items-center gap-5 gap-y-3 mt-5 max-sm:mt-0 max-sm:flex-col max-sm:items-start">
              <div className="flex justify-start items-center gap-1.5">
                <div className="w-2.5 h-2.5 bg-gray-600 rounded-full border border-black"></div>
                <p className="leading-6">Available</p>
              </div>

              <div className="flex justify-start items-center gap-1.5">
                <div className="w-2.5 h-2.5 bg-gray-800 rounded-full border border-black"></div>
                <p className="leading-6">Sold</p>
              </div>

              <div className="flex justify-start items-center gap-1.5">
                <div className="w-2.5 h-2.5 bg-white rounded-full border border-black"></div>
                <p className="leading-6">Reserved</p>
              </div>

              <div className="flex justify-start items-center gap-1.5">
                <div className="w-2.5 h-2.5 bg-gray-400 rounded-full border border-black"></div>
                <p className="leading-6">Not Released</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-4 p-6 bg-white bg-opacity-75 rounded-[40px] h-full w-full max-sm:col-span-full">
          <h3 className="text-4xl leading-10 font-bold mb-7 max-md:text-2xl max-sm:text-xl">Total Revenue</h3>
          <img className="min-h-[300px] object-cover object-left" src={overviewChart} alt="overviewChart" />
        </div>
      </div>
      {/* Activities Container */}
      <div className="mb-5">
        <div className="relative p-6 bg-white bg-opacity-75 rounded-[40px] min-h-[600px]">
          <h3 className="text-4xl leading-10 font-bold max-md:text-2xl max-sm:text-xl">Activities</h3>

          <div className="text-center absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-full">
            <h3 className="text-4xl leading-10 font-bold max-md:text-2xl max-sm:text-xl">Advanced Table</h3>
            <p className="leading-8 text-2xl max-md:text-xl max-sm:text-base">WIZIO Team will sort this out</p>
          </div>
        </div>
      </div>
      {/* Units Container */}
      <div className="mb-5">
        <div className="relative p-6 pb-0 bg-white bg-opacity-75 rounded-[40px] min-h-[600px]">
          <div className="flex justify-start items-center gap-5">
            <h3 className="text-4xl leading-10 font-bold max-md:text-2xl max-sm:text-xl">Units</h3>
            <PlusIcon className={"w-6 h-6 fill-black"} />
          </div>

          <div className="py-5 flex justify-between items-center my-2.5 border-b border-black">
            <button className="flex justify-center items-center gap-2.5 px-4 py-1 border-[0.25px] border-black rounded-full">
              <ThreeDotIcon className={"w-4 h-4 fill-black"} />
              <p className="leading-6">Bulk Action</p>
            </button>

            <div className="flex justify-start items-center gap-5">
              <button className="text-center px-4 py-0.5 border-[0.25px] border-black rounded-full max-md:hidden">
                <p className="leading-6">Create a Group</p>
              </button>
              <div className="flex justify-start items-center gap-5">
                <ReorderIcon className="w-6 h-6 fill-black" />
                <ColumnIcon className="w-6 h-6 fill-black" />
                <FilterIcon className="w-6 h-6 stroke-black fill-none" />
              </div>
            </div>
          </div>
          {/* Unit Table */}

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead className="border-b border-gray-400">
                <tr className="table-row ">
                  <th className="w-8 py-4 pr-3.5">
                    <div className="flex justify-start items-center">
                      <input className="appearance-none bg-transparent w-4 h-4 border border-gray-600 rounded-full focus:border-[6px]" type="radio" />
                    </div>
                  </th>

                  <th className="py-4">
                    <div className="flex justify-start items-center gap-2.5 w-[368px]">
                      <p className="text-sm font-bold">Name</p>
                      <DownArrowIcon className={"w-3 h-2 fill-none stroke-gray-600 stroke-[1.25px]"} />
                    </div>
                  </th>

                  <th className="py-4">
                    <div className="flex justify-start items-center gap-2.5 min-w-44">
                      <p className="text-sm font-bold">Type</p>
                      <DownArrowIcon className={"w-3 h-2 fill-none stroke-gray-600 stroke-[1.25px]"} />
                    </div>
                  </th>

                  <th className="py-4">
                    <div className="flex justify-start items-center gap-2.5 min-w-44">
                      <p className="text-sm font-bold">Status</p>
                      <DownArrowIcon className={"w-3 h-2 fill-none stroke-gray-600 stroke-[1.25px]"} />
                    </div>
                  </th>

                  <th className="py-4">
                    <div className="flex justify-start items-center gap-2.5 min-w-44">
                      <p className="text-sm font-bold">Price</p>
                      <DownArrowIcon className={"w-3 h-2 fill-none stroke-gray-600 stroke-[1.25px]"} />
                    </div>
                  </th>

                  <th className="py-4">
                    <div className="flex justify-start items-center gap-2.5 min-w-44">
                      <p className="text-sm font-bold">Bed</p>
                      <DownArrowIcon className={"w-3 h-2 fill-none stroke-gray-600 stroke-[1.25px]"} />
                    </div>
                  </th>

                  <th className="py-4">
                    <div className="flex justify-start items-center gap-2.5 min-w-44">
                      <p className="text-sm font-bold">SQM</p>
                      <DownArrowIcon className={"w-3 h-2 fill-none stroke-gray-600 stroke-[1.25px]"} />
                    </div>
                  </th>

                  <th className="py-4">
                    <div className="flex justify-start items-center gap-2.5 min-w-44">
                      <p className="text-sm font-bold">View</p>
                      <DownArrowIcon className={"w-3 h-2 fill-none stroke-gray-600 stroke-[1.25px]"} />
                    </div>
                  </th>

                  <th className="py-4">
                    <div className="flex justify-start items-center gap-2.5 min-w-44">
                      <p className="text-sm font-bold">Fav</p>
                      <DownArrowIcon className={"w-3 h-2 fill-none stroke-gray-600 stroke-[1.25px]"} />
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Phase 1 */}
                <tr className="border-b border-gray-400">
                  <td className="w-8 py-4 pr-3.5">
                    <div className="flex justify-start items-center">
                      <input className="appearance-none bg-transparent w-4 h-4 border border-gray-600 rounded-full focus:border-[6px]" type="radio" />
                    </div>
                  </td>
                  <td className="w-8 py-4 pr-3.5">
                    <div className="flex justify-start items-center gap-3">
                      <p className="text-sm">Phase 1</p>
                      <DownArrowIcon className={"w-6 h-6 fill-none stroke-gray-600 stroke-[1.25px] -rotate-90"} />
                    </div>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td className="py-4">
                    <div className="flex justify-between items-center">
                      <p className="text-sm invisible">50</p>
                      <ThreeDotIcon className={"w-6 h-6 fill-black"} />
                    </div>
                  </td>
                </tr>
                {/* Phase 2 */}
                <tr className="border-b border-gray-400">
                  <td className="w-8 py-4 pr-3.5">
                    <div className="flex justify-start items-center">
                      <input className="appearance-none bg-transparent w-4 h-4 border border-gray-600 rounded-full focus:border-[6px]" type="radio" />
                    </div>
                  </td>
                  <td className="w-8 py-4 pr-3.5">
                    <div className="flex justify-start items-center gap-3">
                      <p className="text-sm">Phase 2</p>
                      <DownArrowIcon className={"w-6 h-6 fill-none stroke-gray-600 stroke-[1.25px]"} />
                    </div>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td className="py-4">
                    <div className="flex justify-between items-center">
                      <p className="text-sm invisible">50</p>
                      <ThreeDotIcon className={"w-6 h-6 fill-black"} />
                    </div>
                  </td>
                </tr>
                {/* Zone A */}
                <tr className="border-b border-gray-400">
                  <td className="w-8 py-4 pr-3.5">
                    <div className="flex justify-start items-center">
                      <input className="appearance-none bg-transparent w-4 h-4 border border-gray-600 rounded-full focus:border-[6px]" type="radio" />
                    </div>
                  </td>
                  <td className="w-8 py-4 pr-3.5">
                    <div className="flex justify-start items-center gap-3 pl-5">
                      <p className="text-sm">Zone A</p>
                      <DownArrowIcon className={"w-6 h-6 fill-none stroke-gray-600 stroke-[1.25px] -rotate-90"} />
                    </div>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td className="py-4">
                    <div className="flex justify-between items-center">
                      <p className="text-sm invisible">50</p>
                      <ThreeDotIcon className={"w-6 h-6 fill-black"} />
                    </div>
                  </td>
                </tr>
                {/* Zone B */}
                <tr className="border-b border-gray-400">
                  <td className="w-8 py-4 pr-3.5">
                    <div className="flex justify-start items-center">
                      <input className="appearance-none bg-transparent w-4 h-4 border border-gray-600 rounded-full focus:border-[6px]" type="radio" />
                    </div>
                  </td>
                  <td className="w-8 py-4 pr-3.5">
                    <div className="flex justify-start items-center gap-3 pl-5">
                      <p className="text-sm">Zone B</p>
                      <DownArrowIcon className={"w-6 h-6 fill-none stroke-gray-600 stroke-[1.25px]"} />
                    </div>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td className="py-4">
                    <div className="flex justify-between items-center">
                      <p className="text-sm invisible">50</p>
                      <ThreeDotIcon className={"w-6 h-6 fill-black"} />
                    </div>
                  </td>
                </tr>
                {/* Villa 005 */}
                <tr className="border-b border-gray-400">
                  <td className="w-8 py-4 pr-3.5">
                    <div className="flex justify-start items-center">
                      <input className="appearance-none bg-transparent w-4 h-4 border border-gray-600 rounded-full focus:border-[6px]" type="radio" />
                    </div>
                  </td>
                  <td className="w-8 py-4 pr-3.5">
                    <div className="flex justify-start items-center pl-10">
                      <p className="text-sm">Villa 005</p>
                    </div>
                  </td>
                  <td className="py-4">
                    <p className="text-sm">Villa A</p>
                  </td>
                  <td className="py-4">
                    <p className="text-sm">Available</p>
                  </td>
                  <td className="py-4">
                    <p className="text-sm">€1,500,000</p>
                  </td>
                  <td className="py-4">
                    <p className="text-sm">4 Bed</p>
                  </td>
                  <td className="py-4">
                    <p className="text-sm">125 sqm</p>
                  </td>
                  <td className="py-4">
                    <p className="text-sm">696</p>
                  </td>
                  <td className="py-4">
                    <div className="flex justify-between items-center">
                      <p className="text-sm">50</p>
                      <ThreeDotIcon className={"w-6 h-6 fill-black"} />
                    </div>
                  </td>
                </tr>
                {/* Apartment 002 */}
                <tr className="border-b border-gray-400">
                  <td className="w-8 py-4 pr-3.5">
                    <div className="flex justify-start items-center">
                      <input className="appearance-none bg-transparent w-4 h-4 border border-gray-600 rounded-full focus:border-[6px]" type="radio" />
                    </div>
                  </td>
                  <td className="w-8 py-4 pr-3.5">
                    <div className="flex justify-start items-center gap-3 pl-10">
                      <p className="text-sm">Apartment 002</p>
                      <DownArrowIcon className={"w-6 h-6 fill-none stroke-gray-600 stroke-[1.25px]"} />
                    </div>
                  </td>
                  <td className="py-4"></td>
                  <td className="py-4"></td>
                  <td className="py-4"></td>
                  <td className="py-4"></td>
                  <td className="py-4"></td>
                  <td className="py-4"></td>
                  <td className="py-4">
                    <div className="flex justify-between items-center">
                      <p className="text-sm invisible">50</p>
                      <ThreeDotIcon className={"w-6 h-6 fill-black"} />
                    </div>
                  </td>
                </tr>
                {/* Ground Floor */}
                <tr className="border-b border-gray-400">
                  <td className="w-8 py-4 pr-3.5">
                    <div className="flex justify-start items-center">
                      <input className="appearance-none bg-transparent w-4 h-4 border border-gray-600 rounded-full focus:border-[6px]" type="radio" />
                    </div>
                  </td>
                  <td className="w-8 py-4 pr-3.5">
                    <div className="flex justify-start items-center gap-3 pl-14">
                      <p className="text-sm">Ground Floor</p>
                      <DownArrowIcon className={"w-6 h-6 fill-none stroke-gray-600 stroke-[1.25px]"} />
                    </div>
                  </td>
                  <td className="py-4"></td>
                  <td className="py-4"></td>
                  <td className="py-4"></td>
                  <td className="py-4"></td>
                  <td className="py-4"></td>
                  <td className="py-4"></td>
                  <td className="py-4">
                    <div className="flex justify-between items-center">
                      <p className="text-sm invisible">50</p>
                      <ThreeDotIcon className={"w-6 h-6 fill-black"} />
                    </div>
                  </td>
                </tr>
                {/* Unit 101 */}
                <tr className="border-b border-gray-400">
                  <td className="w-8 py-4 pr-3.5">
                    <div className="flex justify-start items-center">
                      <input className="appearance-none bg-transparent w-4 h-4 border-[6px] border-gray-600 rounded-full" type="radio" />
                    </div>
                  </td>
                  <td className="w-8 py-4 pr-3.5">
                    <div className="flex justify-start items-center pl-20">
                      <p className="text-sm">Unit 101</p>
                    </div>
                  </td>
                  <td className="py-4">
                    <p className="text-sm">Flat Type A</p>
                  </td>
                  <td className="py-4">
                    <p className="text-sm">Available</p>
                  </td>
                  <td className="py-4">
                    <p className="text-sm">€450,000</p>
                  </td>
                  <td className="py-4">
                    <p className="text-sm">2 Bed</p>
                  </td>
                  <td className="py-4">
                    <p className="text-sm">95 sqm</p>
                  </td>
                  <td className="py-4">
                    <p className="text-sm">997</p>
                  </td>
                  <td className="py-4">
                    <div className="flex justify-between items-center">
                      <p className="text-sm">56</p>
                      <ThreeDotIcon className={"w-6 h-6 fill-black"} />
                    </div>
                  </td>
                </tr>
                {/* Unit 102 */}
                <tr className="border-b border-gray-400">
                  <td className="w-8 py-4 pr-3.5">
                    <div className="flex justify-start items-center">
                      <input className="appearance-none bg-transparent w-4 h-4 border-[6px] border-gray-600 rounded-full" type="radio" />
                    </div>
                  </td>
                  <td className="w-8 py-4 pr-3.5">
                    <div className="flex justify-start items-center pl-20">
                      <p className="text-sm">Unit 102</p>
                    </div>
                  </td>
                  <td className="py-4">
                    <p className="text-sm">Flat Type B</p>
                  </td>
                  <td className="py-4">
                    <p className="text-sm">Sold</p>
                  </td>
                  <td className="py-4">
                    <p className="text-sm">€500,000</p>
                  </td>
                  <td className="py-4">
                    <p className="text-sm">3 Bed</p>
                  </td>
                  <td className="py-4">
                    <p className="text-sm">90 sqm</p>
                  </td>
                  <td className="py-4">
                    <p className="text-sm">1,127</p>
                  </td>
                  <td className="py-4">
                    <div className="flex justify-between items-center">
                      <p className="text-sm">213</p>
                      <ThreeDotIcon className={"w-6 h-6 fill-black"} />
                    </div>
                  </td>
                </tr>
                {/* Unit 103 */}
                <tr className="border-b border-gray-400">
                  <td className="w-8 py-4 pr-3.5">
                    <div className="flex justify-start items-center">
                      <input className="appearance-none bg-transparent w-4 h-4 border-[6px] border-gray-600 rounded-full" type="radio" />
                    </div>
                  </td>
                  <td className="w-8 py-4 pr-3.5">
                    <div className="flex justify-start items-center pl-20">
                      <p className="text-sm">Unit 103</p>
                    </div>
                  </td>
                  <td className="py-4">
                    <p className="text-sm">Flat Type C</p>
                  </td>
                  <td className="py-4">
                    <p className="text-sm">Available</p>
                  </td>
                  <td className="py-4">
                    <p className="text-sm">€495,750</p>
                  </td>
                  <td className="py-4">
                    <p className="text-sm">3 Bed</p>
                  </td>
                  <td className="py-4">
                    <p className="text-sm">125 sqm</p>
                  </td>
                  <td className="py-4">
                    <p className="text-sm">3,452</p>
                  </td>
                  <td className="py-4">
                    <div className="flex justify-between items-center">
                      <p className="text-sm">765</p>
                      <ThreeDotIcon className={"w-6 h-6 fill-black"} />
                    </div>
                  </td>
                </tr>
                {/* Unit 104 */}
                <tr className="border-b border-gray-400">
                  <td className="w-8 py-4 pr-3.5">
                    <div className="flex justify-start items-center">
                      <input className="appearance-none bg-transparent w-4 h-4 border border-gray-600 rounded-full focus:border-[6px]" type="radio" />
                    </div>
                  </td>
                  <td className="w-8 py-4 pr-3.5">
                    <div className="flex justify-start items-center pl-20">
                      <p className="text-sm">Unit 104</p>
                    </div>
                  </td>
                  <td className="py-4">
                    <p className="text-sm">Flat Type D</p>
                  </td>
                  <td className="py-4">
                    <p className="text-sm">Reserved</p>
                  </td>
                  <td className="py-4">
                    <p className="text-sm">€500,000</p>
                  </td>
                  <td className="py-4">
                    <p className="text-sm">2 Bed</p>
                  </td>
                  <td className="py-4">
                    <p className="text-sm">123 sqm</p>
                  </td>
                  <td className="py-4">
                    <p className="text-sm">512</p>
                  </td>
                  <td className="py-4">
                    <div className="flex justify-between items-center">
                      <p className="text-sm">42</p>
                      <ThreeDotIcon className={"w-6 h-6 fill-black"} />
                    </div>
                  </td>
                </tr>
                {/* First Floor */}
                <tr className="border-b border-gray-400">
                  <td className="w-8 py-4 pr-3.5">
                    <div className="flex justify-start items-center">
                      <input className="appearance-none bg-transparent w-4 h-4 border border-gray-600 rounded-full focus:border-[6px]" type="radio" />
                    </div>
                  </td>
                  <td className="w-8 py-4 pr-3.5">
                    <div className="flex justify-start items-center gap-3 pl-14">
                      <p className="text-sm">First Floor</p>
                      <DownArrowIcon className={"w-6 h-6 fill-none stroke-gray-600 stroke-[1.25px]"} />
                    </div>
                  </td>
                  <td className="py-4"></td>
                  <td className="py-4"></td>
                  <td className="py-4"></td>
                  <td className="py-4"></td>
                  <td className="py-4"></td>
                  <td className="py-4"></td>
                  <td className="py-4">
                    <div className="flex justify-between items-center">
                      <p className="text-sm invisible">50</p>
                      <ThreeDotIcon className={"w-6 h-6 fill-black"} />
                    </div>
                  </td>
                </tr>
                {/* Unit 201 */}
                <tr className="border-b border-gray-400">
                  <td className="w-8 py-4 pr-3.5">
                    <div className="flex justify-start items-center">
                      <input className="appearance-none bg-transparent w-4 h-4 border border-gray-600 rounded-full focus:border-[6px]" type="radio" />
                    </div>
                  </td>
                  <td className="w-8 py-4 pr-3.5">
                    <div className="flex justify-start items-center pl-20">
                      <p className="text-sm">Unit 201</p>
                    </div>
                  </td>
                  <td className="py-4">
                    <p className="text-sm">Flat Type A</p>
                  </td>
                  <td className="py-4">
                    <p className="text-sm">Sold</p>
                  </td>
                  <td className="py-4">
                    <p className="text-sm">€450,000</p>
                  </td>
                  <td className="py-4">
                    <p className="text-sm">2 Bed</p>
                  </td>
                  <td className="py-4">
                    <p className="text-sm">95 sqm</p>
                  </td>
                  <td className="py-4">
                    <p className="text-sm">23,445</p>
                  </td>
                  <td className="py-4">
                    <div className="flex justify-between items-center">
                      <p className="text-sm">2,493</p>
                      <ThreeDotIcon className={"w-6 h-6 fill-black"} />
                    </div>
                  </td>
                </tr>
                {/* Unit 202 */}
                <tr className="border-b border-gray-400">
                  <td className="w-8 py-4 pr-3.5">
                    <div className="flex justify-start items-center">
                      <input className="appearance-none bg-transparent w-4 h-4 border border-gray-600 rounded-full focus:border-[6px]" type="radio" />
                    </div>
                  </td>
                  <td className="w-8 py-4 pr-3.5">
                    <div className="flex justify-start items-center pl-20">
                      <p className="text-sm">Unit 202</p>
                    </div>
                  </td>
                  <td className="py-4">
                    <p className="text-sm">Flat Type B</p>
                  </td>
                  <td className="py-4">
                    <p className="text-sm">Reserved</p>
                  </td>
                  <td className="py-4">
                    <p className="text-sm">€495,000</p>
                  </td>
                  <td className="py-4">
                    <p className="text-sm">2 Bed</p>
                  </td>
                  <td className="py-4">
                    <p className="text-sm">125 sqm</p>
                  </td>
                  <td className="py-4">
                    <p className="text-sm">1,965</p>
                  </td>
                  <td className="py-4">
                    <div className="flex justify-between items-center">
                      <p className="text-sm">416</p>
                      <ThreeDotIcon className={"w-6 h-6 fill-black"} />
                    </div>
                  </td>
                </tr>
                {/* Unit 203 */}
                <tr className="border-b border-gray-400">
                  <td className="w-8 py-4 pr-3.5">
                    <div className="flex justify-start items-center">
                      <input className="appearance-none bg-transparent w-4 h-4 border border-gray-600 rounded-full focus:border-[6px]" type="radio" />
                    </div>
                  </td>
                  <td className="w-8 py-4 pr-3.5">
                    <div className="flex justify-start items-center pl-20">
                      <p className="text-sm">Unit 203</p>
                    </div>
                  </td>
                  <td className="py-4">
                    <p className="text-sm">Flat Type C</p>
                  </td>
                  <td className="py-4">
                    <p className="text-sm">Available</p>
                  </td>
                  <td className="py-4">
                    <p className="text-sm">€1,500,000</p>
                  </td>
                  <td className="py-4">
                    <p className="text-sm">2 Bed</p>
                  </td>
                  <td className="py-4">
                    <p className="text-sm">250 sqm</p>
                  </td>
                  <td className="py-4">
                    <p className="text-sm">23,500</p>
                  </td>
                  <td className="py-4">
                    <div className="flex justify-between items-center">
                      <p className="text-sm">1,501</p>
                      <ThreeDotIcon className={"w-6 h-6 fill-black"} />
                    </div>
                  </td>
                </tr>
                {/* Unit 204 */}
                <tr className="border-b border-gray-400">
                  <td className="w-8 py-4 pr-3.5">
                    <div className="flex justify-start items-center">
                      <input className="appearance-none bg-transparent w-4 h-4 border border-gray-600 rounded-full focus:border-[6px]" type="radio" />
                    </div>
                  </td>
                  <td className="w-8 py-4 pr-3.5">
                    <div className="flex justify-start items-center pl-20">
                      <p className="text-sm">Unit 204</p>
                    </div>
                  </td>
                  <td className="py-4">
                    <p className="text-sm">Flat Type D</p>
                  </td>
                  <td className="py-4">
                    <p className="text-sm">Not Released</p>
                  </td>
                  <td className="py-4">
                    <p className="text-sm">€500,000</p>
                  </td>
                  <td className="py-4">
                    <p className="text-sm">5 Bed</p>
                  </td>
                  <td className="py-4">
                    <p className="text-sm">125 sqm</p>
                  </td>
                  <td className="py-4">
                    <p className="text-sm">9,213</p>
                  </td>
                  <td className="py-4">
                    <div className="flex justify-between items-center">
                      <p className="text-sm">422</p>
                      <ThreeDotIcon className={"w-6 h-6 fill-black"} />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* Table Pagination */}

          <div className="py-7 flex justify-between items-center max-md:justify-center">
            <p className="leading-6 max-md:hidden">110-120 of 1,250</p>

            <div className="flex justify-center items-center gap-2">
              <div className="w-7 h-7 rounded-full border-[0.25px] border-black flex justify-center items-center">
                <DownArrowIcon className={"w-4 h-4 fill-none stroke-black stroke-[1.25px] rotate-90"} />
              </div>

              <div className="w-9 h-9 bg-black text-white rounded-full border-[0.25px] border-black flex justify-center items-center">
                <p className="leading-6">1</p>
              </div>
              <div className="w-9 h-9 rounded-full border-[0.25px] border-black flex justify-center items-center">
                <p className="leading-6">2</p>
              </div>
              <div className="w-9 h-9 rounded-full border-[0.25px] border-black flex justify-center items-center">
                <p className="leading-6">3</p>
              </div>
              <div className="w-9 h-9 rounded-full border-[0.25px] border-black flex justify-center items-center max-sm:hidden">
                <p className="leading-6">4</p>
              </div>
              <div className="w-9 h-9 rounded-full border-[0.25px] border-black flex justify-center items-center max-sm:hidden">
                <p className="leading-6">5</p>
              </div>
              <div className="w-9 h-9 rounded-full border-[0.25px] border-black flex justify-center items-center">
                <ThreeDotIcon className={"w-4 h-4 fill-black rotate-90"} />
              </div>
              <div className="w-9 h-9 rounded-full border-[0.25px] border-black flex justify-center items-center max-sm:hidden">
                <p className="leading-6">25</p>
              </div>

              <div className="w-7 h-7 rounded-full border-[0.25px] border-black flex justify-center items-center">
                <DownArrowIcon className={"w-4 h-4 fill-none stroke-black stroke-[1.25px] -rotate-90"} />
              </div>
            </div>
            <div className="flex justify-start items-center gap-2 max-md:hidden">
              <p className="leading-6">per page</p>
              <button className="flex justify-center items-center gap-2.5 px-3 py-1 border-[0.25px] border-black rounded-full">
                <p className="leading-6">50</p>
                <DownArrowIcon className={"w-4 h-4 fill-none stroke-black stroke-[1.25px]"} />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Master Types Container */}
      <div className="mb-5">
        <div className="relative p-6 bg-white bg-opacity-75 rounded-[40px] min-h-[600px]">
          <div className="flex justify-start items-center gap-5">
            <h3 className="text-4xl leading-10 font-bold max-md:text-2xl max-sm:text-xl">Master Types</h3>
            <PlusIcon className={"w-6 h-6 fill-black"} />
          </div>

          <div className="text-center absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-full">
            <h3 className="text-4xl leading-10 font-bold max-md:text-2xl max-sm:text-xl">Advanced Table</h3>
            <p className="leading-8 text-2xl max-md:text-xl max-sm:text-base">WIZIO Team will sort this out</p>
          </div>
        </div>
      </div>
      {/* Clients Container */}
      <div className="mb-5">
        <div className="relative p-6 bg-white bg-opacity-75 rounded-[40px] min-h-[600px]">
          <div className="flex justify-start items-center gap-5">
            <h3 className="text-4xl leading-10 font-bold max-md:text-2xl max-sm:text-xl">Clients</h3>
            <PlusIcon className={"w-6 h-6 fill-black"} />
          </div>

          <div className="text-center absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-full">
            <h3 className="text-4xl leading-10 font-bold max-md:text-2xl max-sm:text-xl">Advanced Table</h3>
            <p className="leading-8 text-2xl max-md:text-xl max-sm:text-base">WIZIO Team will sort this out</p>
          </div>
        </div>
      </div>
      {/* Team Container */}
      <div className="mb-5">
        <div className="relative p-6 bg-white bg-opacity-75 rounded-[40px] min-h-[600px]">
          <div className="flex justify-start items-center gap-5">
            <h3 className="text-4xl leading-10 font-bold max-md:text-2xl max-sm:text-xl">Team</h3>
            <PlusIcon className={"w-6 h-6 fill-black"} />
          </div>

          <div className="text-center absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-full">
            <h3 className="text-4xl leading-10 font-bold max-md:text-2xl max-sm:text-xl">Advanced Table</h3>
            <p className="leading-8 text-2xl max-md:text-xl max-sm:text-base">WIZIO Team will sort this out</p>
          </div>
        </div>
      </div>
      {/* Last Container */}
      <div className="flex justify-between items-stretch gap-5 h-full max-lg:flex-col">
        <div className="max-w-[681px] w-full bg-white bg-opacity-50 p-5 rounded-[40px] max-lg:max-w-full">
          <div className="flex justify-start items-center gap-5">
            <h3 className="text-4xl leading-10 font-bold max-md:text-2xl max-sm:text-xl">Point of interest</h3>
            <PlusIcon className={"w-6 h-6 fill-black"} />
          </div>

          <div className="py-5 flex justify-between items-center my-2.5 border-b border-black">
            <button className="flex justify-center items-center gap-2.5 px-4 py-1 border-[0.25px] border-black rounded-full">
              <ThreeDotIcon className={"w-4 h-4 fill-black"} />
              <p className="leading-6">Bulk Action</p>
            </button>

            <div className="flex justify-start items-center gap-5">
              <div className="flex justify-start items-center gap-5">
                <ReorderIcon className="w-6 h-6 fill-black" />
                <ColumnIcon className="w-6 h-6 fill-black" />
                <FilterIcon className="w-6 h-6 stroke-black fill-none" />
              </div>
            </div>
          </div>
          {/* Table */}
          <div>
            <div className="flex justify-start items-center py-3.5 border-b border-gray-400">
              <input className="appearance-none bg-transparent w-4 h-4 border border-gray-600 rounded-full focus:border-[6px] mr-3.5" type="radio" />
              <p className="text-sm font-bold">Name</p>
            </div>

            <div className="flex justify-between items-center border-b border-gray-400">
              <div className="flex justify-start items-center py-3.5">
                <input className="appearance-none bg-transparent w-4 h-4 border border-gray-600 rounded-full focus:border-[6px] mr-3.5" type="radio" />
                <div className="flex justify-start items-center gap-3">
                  <p className="text-sm">Restaurants</p>
                  <DownArrowIcon className={"w-4 h-4 fill-none stroke-black stroke-[1.25px] -ml-0.5"} />
                </div>
              </div>
              <ThreeDotIcon className={"w-5 h-5 fill-black"} />
            </div>

            <div className="flex justify-between items-center border-b border-gray-400">
              <div className="flex justify-start items-center py-3.5">
                <input className="appearance-none bg-transparent w-4 h-4 border border-gray-600 rounded-full focus:border-[6px] mr-3.5" type="radio" />
                <div className="flex justify-start items-center">
                  <p className="text-sm ml-12">Restaurant A</p>
                </div>
              </div>
              <ThreeDotIcon className={"w-5 h-5 fill-black"} />
            </div>

            <div className="flex justify-between items-center border-b border-gray-400">
              <div className="flex justify-start items-center py-3.5">
                <input className="appearance-none bg-transparent w-4 h-4 border border-gray-600 rounded-full focus:border-[6px] mr-3.5" type="radio" />
                <div className="flex justify-start items-center">
                  <p className="text-sm ml-12">Restaurant B</p>
                </div>
              </div>
              <ThreeDotIcon className={"w-5 h-5 fill-black"} />
            </div>

            <div className="flex justify-between items-center border-b border-gray-400">
              <div className="flex justify-start items-center py-3.5">
                <input className="appearance-none bg-transparent w-4 h-4 border border-gray-600 rounded-full focus:border-[6px] mr-3.5" type="radio" />
                <div className="flex justify-start items-center gap-3">
                  <p className="text-sm">Airport</p>
                  <DownArrowIcon className={"w-4 h-4 fill-none stroke-black stroke-[1.25px] -ml-0.5"} />
                </div>
              </div>
              <ThreeDotIcon className={"w-5 h-5 fill-black"} />
            </div>

            <div className="flex justify-between items-center border-b border-gray-400">
              <div className="flex justify-start items-center py-3.5">
                <input className="appearance-none bg-transparent w-4 h-4 border border-gray-600 rounded-full focus:border-[6px] mr-3.5" type="radio" />
                <div className="flex justify-start items-center">
                  <p className="text-sm ml-12">Airport A</p>
                </div>
              </div>
              <ThreeDotIcon className={"w-5 h-5 fill-black"} />
            </div>

            <div className="flex justify-between items-center border-b border-gray-400">
              <div className="flex justify-start items-center py-3.5">
                <input className="appearance-none bg-transparent w-4 h-4 border border-gray-600 rounded-full focus:border-[6px] mr-3.5" type="radio" />
                <div className="flex justify-start items-center gap-3">
                  <p className="text-sm">Museum</p>
                  <DownArrowIcon className={"w-4 h-4 fill-none stroke-black stroke-[1.25px] -ml-0.5"} />
                </div>
              </div>
              <ThreeDotIcon className={"w-5 h-5 fill-black"} />
            </div>

            <div className="flex justify-between items-center border-b border-gray-400">
              <div className="flex justify-start items-center py-3.5">
                <input className="appearance-none bg-transparent w-4 h-4 border-[6px] border-gray-600 rounded-full mr-3.5" type="radio" />
                <div className="flex justify-start items-center">
                  <p className="text-sm ml-12">Museum A</p>
                </div>
              </div>
              <ThreeDotIcon className={"w-5 h-5 fill-black"} />
            </div>

            <div className="flex justify-between items-center border-b border-gray-400">
              <div className="flex justify-start items-center py-3.5">
                <input className="appearance-none bg-transparent w-4 h-4 border-[6px] border-gray-600 rounded-full mr-3.5" type="radio" />
                <div className="flex justify-start items-center">
                  <p className="text-sm ml-12">Museum B</p>
                </div>
              </div>
              <ThreeDotIcon className={"w-5 h-5 fill-black"} />
            </div>

            <div className="flex justify-between items-center border-b border-gray-400">
              <div className="flex justify-start items-center py-3.5">
                <input className="appearance-none bg-transparent w-4 h-4 border-[6px] border-gray-600 rounded-full mr-3.5" type="radio" />
                <div className="flex justify-start items-center">
                  <p className="text-sm ml-12">Museum C</p>
                </div>
              </div>
              <ThreeDotIcon className={"w-5 h-5 fill-black"} />
            </div>

            <div className="flex justify-between items-center border-b border-gray-400">
              <div className="flex justify-start items-center py-3.5">
                <input className="appearance-none bg-transparent w-4 h-4 border border-gray-600 rounded-full mr-3.5" type="radio" />
                <div className="flex justify-start items-center">
                  <p className="text-sm ml-12">Museum D</p>
                </div>
              </div>
              <ThreeDotIcon className={"w-5 h-5 fill-black"} />
            </div>
          </div>

          <div className="py-7 flex justify-between items-center">
            <p className="leading-6 max-md:hidden">110-120 of 1,250</p>

            <div className="flex justify-center items-center gap-2">
              <div className="w-7 h-7 rounded-full border-[0.25px] border-black flex justify-center items-center">
                <DownArrowIcon className={"w-4 h-4 fill-none stroke-black stroke-[1.25px] rotate-90"} />
              </div>

              <div className="w-7 h-7 rounded-full border-[0.25px] border-black flex justify-center items-center">
                <DownArrowIcon className={"w-4 h-4 fill-none stroke-black stroke-[1.25px] -rotate-90"} />
              </div>
            </div>
            <div className="flex justify-start items-center gap-2">
              <p className="leading-6">per page</p>
              <button className="flex justify-center items-center gap-2.5 px-3 py-1 border-[0.25px] border-black rounded-full">
                <p className="leading-6">50</p>
                <DownArrowIcon className={"w-4 h-4 fill-none stroke-black stroke-[1.25px]"} />
              </button>
            </div>
          </div>
        </div>

        <div className="rounded-[40px] overflow-hidden">
          <img className="w-full h-full object-cover" src={projectPageBuildingImg} alt="projectPageBuildingImg" />
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
