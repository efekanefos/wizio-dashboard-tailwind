import React from "react";
import ProjectLogo from "../../svg/ProjectLogo";
import DarkModeIcon from "../../svg/DarkModeIcon";
import GlobalIcon from "../../svg/GlobalIcon";
import NotificationIcon from "../../svg/NotificationIcon";
import UserIcon from "../../svg/UserIcon";
import PortalIcon from "../../svg/PortalIcon";
import FileUploadIcon from "../../svg/FileUploadIcon";
import projectSliderImg from "../../svg/projectSliderImg.png";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import PlusIcon from "../../svg/PlusIcon";
import overviewChart from "../../svg/overviewChart.png";
import overviewPieChart from "../../svg/overviewPieChart.png";
import MobileHamburgerIcon from "../../svg/MobileHamburgerIcon";

const OverviewPage = () => {
  return (
    <div>
      {/* Header Content */}
      <div className="w-full flex justify-between items-center pt-12 px-12 max-xl:px-5 max-md:px-4 max-sm:px-3">
        <ProjectLogo className={"w-12 h-8 fill-black"} />

        <div className="flex justify-center items-center gap-12 max-md:hidden">
          <p className="text-xl leading-7 underline underline-offset-[16px]">Overview</p>
          <p className="text-xl leading-7">Clients</p>
          <p className="text-xl leading-7">Team</p>
          <button className="bg-lime-500 flex justify-center items-center gap-2.5 rounded-full py-1.5 px-4">
            <PortalIcon className={"w-6 h-6 max-md:w-5 max-md:h-5 max-sm:w-4 max-sm:h-4 fill-black"} />
            <p>Portal</p>
          </button>
        </div>

        <div className="flex justify-start items-center gap-5 max-md:hidden">
          <DarkModeIcon className={"w-6 h-6 max-md:w-5 max-md:h-5 max-sm:w-4 max-sm:h-4 stroke-black stroke-[1.5px] fill-none"} />
          <GlobalIcon className={"w-6 h-6 max-md:w-5 max-md:h-5 max-sm:w-4 max-sm:h-4  fill-black"} />
          <NotificationIcon className={"w-6 h-6 max-md:w-5 max-md:h-5 max-sm:w-4 max-sm:h-4 stroke-black fill-none "} />
          <UserIcon className={"w-6 h-6 max-md:w-5 max-md:h-5 max-sm:w-4 max-sm:h-4 fill-black"} />
        </div>

        <MobileHamburgerIcon className={"hidden max-md:block w-6 h-6 max-md:w-5 max-md:h-5 max-sm:w-4 max-sm:h-4 stroke-black stroke-2"} />
      </div>
      {/* Type Title Content */}
      <div className="flex justify-between items-center w-full my-5 px-12 max-xl:px-5 max-md:px-4 max-sm:px-3">
        <h3 className="text-4xl font-bold leading-10 max-md:text-xl">DASHBOARD</h3>

        <div className="flex justify-start items-center gap-5">
          <button className="outline-none border-[0.5px] border-black rounded-full py-0.5 px-4 text-base leading-6">Date</button>
          <button className="w-9 h-9 flex justify-center items-center outline-none border-[0.5px] border-black rounded-full">
            <FileUploadIcon className={"w-6 h-6 max-md:w-5 max-md:h-5 max-sm:w-4 max-sm:h-4 stroke-black stroke-[1.5px] fill-none"} />
          </button>
        </div>
      </div>
      {/* Revenue / Projects */}
      <div className="flex justify-start items-start my-20 px-12 max-xl:px-5 max-md:px-4 max-sm:px-3 max-md:mt-10 max-md:mb-4">
        <div className="border-r-2 border-black pr-5">
          <h1 className="text-8xl font-bold max-md:text-6xl max-sm:text-4xl">
            €510.32 <span className="text-4xl max-md:text-2xl max-sm:text-xl">M</span>
          </h1>
          <p className="text-2xl leading-8 max-md:text-base">Total Revenue</p>
        </div>
        <div className="pl-5">
          <h1 className="text-8xl font-bold max-md:text-6xl max-sm:text-4xl">6</h1>
          <p className="text-2xl leading-8 max-md:text-2xl max-sm:text-base">Live Projects</p>
        </div>
      </div>
      {/* Project Slider */}
      <div className="my-20 flex justify-start gap-5 pl-12 max-xl:pl-5 max-md:pl-4 max-sm:pl-3 overflow-hidden max-md:mt-10 max-md:mb-4 max-sm:gap-3">
        <div className="flex justify-start items-center rounded-r-[40px] w-fit bg-[radial-gradient(circle,_rgba(75,85,99,0.6)_0%,_rgba(209,213,219,0.6)_100%)] backdrop-blur-2xl min-h-60 max-md:min-h-40">
          <div className="px-7 max-sm:px-3">
            <PlusIcon className="w-8 h-8 stroke-black max-sm:w-6" />
          </div>
        </div>
        <Splide
          options={{
            arrows: false,
            pagination: false,
            loop: true,
            rewind: true,
            perPage: 4,
            gap: "20px",
            focus: "center",
            autoWidth: true,
            breakpoints: {
              768: {
                perPage: 3,
              },
              640: {
                perPage: 1,
              },
            },
          }}
          aria-label="Project Slider"
        >
          {Array.from({ length: 6 }).map((_, index) => (
            <SplideSlide key={index}>
              <div className="flex justify-start items-center rounded-[40px] w-fit bg-[radial-gradient(circle,_rgba(75,85,99,0.6)_0%,_rgba(209,213,219,0.6)_100%)] backdrop-blur-2xl">
                <div className="border-r border-black p-5 max-sm:p-4">
                  <h3 className="text-4xl leading-10 font-bold max-md:text-xl w-fit">One</h3>
                  <div className="flex justify-start items-start gap-5 mt-5 mr-5 max-md:mt-4 max-sm:mr-0">
                    <div className="rounded-[40px] overflow-hidden max-sm:rounded-3xl">
                      <img className="max-sm:w-24 max-sm:h-24" src={projectSliderImg} alt="projectSliderImg" />
                    </div>
                    <div className="flex flex-col gap-4 max-sm:gap-0">
                      <div className="flex flex-col">
                        <p className="text-4xl font-bold leading-7 max-md:text-xl">
                          €510.32 <span className="text-base leading-6 max-md:text-xs">m</span>
                        </p>
                        <p className="text-xl leading-7 max-md:text-base">Total Revenue</p>
                      </div>
                      <div className="flex flex-col">
                        <p className="text-4xl font-bold leading-7 max-md:text-xl">
                          85 <span className="text-base leading-6 max-md:text-xs">%</span>
                        </p>
                        <p className="text-xl leading-7 max-md:text-base">Sold</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-7 max-md:px-3.5">
                  <PortalIcon className="w-8 h-8 fill-black max-md:w-5 max-md:h-5" />
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
      {/* Charts */}
      <div className="grid grid-cols-6 justify-between items-start gap-5 mb-5 px-12 max-xl:px-5 max-md:px-4 max-sm:px-3 max-sm:grid-cols-1">
        <div className="col-span-4 p-6 bg-white bg-opacity-75 rounded-[40px] h-full w-full max-sm:col-span-full">
          <h3 className="text-4xl leading-10 font-bold mb-7 max-md:text-xl">Total Revenue</h3>
          <img className="min-h-[300px] object-cover object-left" src={overviewChart} alt="overviewChart" />
        </div>
        <div className="col-span-2 p-6 bg-white bg-opacity-75 rounded-[40px] h-full w-full max-sm:col-span-full">
          <h3 className="text-4xl leading-10 font-bold max-md:text-xl">Unit Status</h3>
          <div className="flex justify-center items-center relative w-fit mx-auto my-5">
            <img src={overviewPieChart} alt="overviewPieChart" />
            <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-center">
              <p className="text-2xl font-bold leading-6 max-md:text-xs">
                Total Unit <br /> <span className="text-xl leading-7 max-md:text-base">240</span>
              </p>
            </div>
            <div className="absolute -top-5 right-3 bg-white rounded-full w-20 h-20 flex justify-center items-center text-center max-md:w-10 max-md:h-10 max-md:top-3 max-md:right-3">
              <h5 className="text-xl leading-7 font-bold max-md:text-xs">53%</h5>
            </div>
          </div>
          <div className="flex flex-wrap mx-auto max-w-56 justify-center items-center gap-5 gap-y-3 mt-5">
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
      {/* Projects Container */}
      <div className="px-12 mb-5 max-xl:px-5 max-md:px-4 max-sm:px-3">
        <div className="relative p-6 bg-white bg-opacity-75 rounded-[40px] min-h-[600px]">
          <div className="flex justify-start items-center gap-5">
            <h3 className="text-4xl leading-10  font-bold">Projects</h3>
            <PlusIcon className={"w-6 h-6 fill-black"} />
          </div>
          <div className="text-center absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-full">
            <h3 className="text-4xl leading-10 font-bold">Advanced Table</h3>
            <p className="leading-8 text-2xl">WIZIO Team will sort this out</p>
          </div>
        </div>
      </div>
      {/* Clients Container */}
      <div className="px-12 mb-5 max-xl:px-5 max-md:px-4 max-sm:px-3">
        <div className="relative p-6 bg-white bg-opacity-75 rounded-[40px] min-h-[600px]">
          <div className="flex justify-start items-center gap-5">
            <h3 className="text-4xl leading-10  font-bold">Clients</h3>
            <PlusIcon className={"w-6 h-6 fill-black"} />
          </div>
          <div className="text-center absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-full">
            <h3 className="text-4xl leading-10 font-bold">Advanced Table</h3>
            <p className="leading-8 text-2xl">WIZIO Team will sort this out</p>
          </div>
        </div>
      </div>
      {/* Team Container */}
      <div className="px-12 mb-5 max-xl:px-5 max-md:px-4 max-sm:px-3">
        <div className="relative p-6 bg-white bg-opacity-75 rounded-[40px] min-h-[600px]">
          <div className="flex justify-start items-center gap-5">
            <h3 className="text-4xl leading-10  font-bold">Team</h3>
            <PlusIcon className={"w-6 h-6 fill-black"} />
          </div>
          <div className="text-center absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-full">
            <h3 className="text-4xl leading-10 font-bold">Advanced Table</h3>
            <p className="leading-8 text-2xl">WIZIO Team will sort this out</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewPage;
