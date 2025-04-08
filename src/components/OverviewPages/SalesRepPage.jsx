import React from "react";
import ProjectLogo from "../../svg/ProjectLogo";
import DarkModeIcon from "../../svg/DarkModeIcon";
import GlobalIcon from "../../svg/GlobalIcon";
import NotificationIcon from "../../svg/NotificationIcon";
import UserIcon from "../../svg/UserIcon";
import PortalIcon from "../../svg/PortalIcon";
import FileUploadIcon from "../../svg/FileUploadIcon";
import MobileHamburgerIcon from "../../svg/MobileHamburgerIcon";
import rebecca_harper_big from "../../svg/rebecca_harper_big.png";
import EditIcon from "../../svg/EditIcon";
import project_a from "../../svg/project_a.png";
import project_b from "../../svg/project_b.png";
import project_c from "../../svg/project_c.png";
import project_d from "../../svg/project_d.png";
import PlusIcon from "../../svg/PlusIcon";

const SalesRepPage = () => {
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
            <PortalIcon className={"w-6 h-6 max-md:w-5 max-md:h-5 max-sm:w-4 max-sm:h-4 fill-black"} />
            <p>Portal</p>
          </button>
        </div>

        <div className="flex justify-start items-center gap-5 max-md:hidden">
          <DarkModeIcon className={"w-6 h-6 max-md:w-5 max-md:h-5 max-sm:w-4 max-sm:h-4 stroke-black stroke-[1.5px] fill-none"} />
          <GlobalIcon className={"w-6 h-6 max-md:w-5 max-md:h-5 max-sm:w-4 max-sm:h-4  fill-black"} />
          <NotificationIcon className={"w-6 h-6 max-md:w-5 max-md:h-5 max-sm:w-4 max-sm:h-4  stroke-black fill-none "} />
          <UserIcon className={"w-6 h-6 max-md:w-5 max-md:h-5 max-sm:w-4 max-sm:h-4 fill-black"} />
        </div>

        <MobileHamburgerIcon className={"hidden max-md:block w-6 h-6 max-md:w-5 max-md:h-5 max-sm:w-4 max-sm:h-4 stroke-black stroke-2"} />
      </div>
      {/* Type Title Content */}
      <div className="flex justify-between items-center w-full mt-5">
        <h3 className="text-4xl font-bold leading-10 max-md:text-2xl">Sales Rep A</h3>

        <div className="flex justify-start items-center gap-5">
          <button className="outline-none border-[0.5px] border-black rounded-full py-0.5 px-4 text-base leading-6">Date</button>
          <button className="w-9 h-9 flex justify-center items-center outline-none border-[0.5px] border-black rounded-full">
            <FileUploadIcon className={"w-6 h-6 max-md:w-5 max-md:h-5 max-sm:w-4 max-sm:h-4 stroke-black stroke-[1.5px] fill-none"} />
          </button>
        </div>
      </div>
      {/* Client Data */}
      <div className="mt-20 flex justify-start items-center gap-12 max-md:gap-6 max-sm:gap-3">
        <img className="w-36 h-36 max-md:w-24 max-md:h-24" src={rebecca_harper_big} alt="rebecca_harper_big" />

        <div className="flex flex-col gap-7 border-r-2 pr-10 border-black max-md:pr-6 max-sm:pr-3">
          <div>
            <div className="relative pr-8">
              <h2 className="text-5xl leading-9 font-bold max-md:text-4xl max-sm:text-2xl">Rebecca Harper</h2>
              <EditIcon className={"w-6 h-6 max-md:w-5 max-md:h-5 max-sm:w-4 max-sm:h-4 stroke-black fill-none absolute top-0 right-0"} />
            </div>

            <div className="flex justify-start items-center gap-3 mt-2 max-md:mt-0">
              <p className="text-xl leading-4 max-md:text-xl max-sm:text-base">Sales Manager</p>
              <div className="w-5 h-5 rounded-full bg-lime-500"></div>
            </div>
          </div>

          <div className="flex justify-start items-start gap-12 max-md:gap-3">
            <div>
              <h3 className="text-4xl leading-7 font-bold max-md:text-2xl">476</h3>
              <p className="text-xl leading-7 max-md:text-lg max-md:mt-0 max-sm:text-base">Assigned Clients</p>
            </div>

            <div>
              <h3 className="text-4xl leading-7 font-bold max-md:text-2xl">75</h3>
              <p className="text-xl leading-7 max-md:text-lg max-md:mt-0 max-sm:text-base">Presentation</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div>
            <h2 className="text-5xl leading-9 font-bold max-md:text-4xl max-sm:text-2xl">15</h2>
            <p className="text-xl leading-4 mt-3 max-md:text-xl max-md:mt-0 max-sm:text-base">Sales</p>
          </div>
          <div>
            <h2 className="text-4xl leading-9 font-bold max-md:text-4xl max-sm:text-2xl">3</h2>
            <p className="text-xl leading-4 mt-2 max-md:text-xl max-md:mt-0 max-sm:text-base">Reserved</p>
          </div>
        </div>
      </div>
      {/* Client Details Container */}
      <div className="grid grid-cols-12 gap-5 mt-20 max-md:grid-cols-full">
        {/* Details Side */}
        <div className="col-span-4 w-full h-full min-h-full flex flex-col gap-5 max-md:col-span-full">
          <div className="w-full bg-white bg-opacity-75 rounded-[40px]">
            {/* List */}
            <div className="p-5 bg-white bg-opacity-75 w-full rounded-[40px] max-md:max-w-full">
              <div className="flex justify-start items-center gap-5">
                <h4 className="leading-10 font-bold text-4xl">Details</h4>
                <EditIcon className={"w-6 h-6 max-md:w-5 max-md:h-5 max-sm:w-4 max-sm:h-4 stroke-black fill-none"} />
              </div>
              <ul className="mt-5">
                <li className="flex justify-between items-center py-4 border-b-[0.25px] border-gray-400">
                  <p className="text-sm leading-6 font-bold">Phone number:</p>
                  <p className="text-sm">+44 7907 579 742</p>
                </li>
                <li className="flex justify-between items-center py-4 border-b-[0.25px] border-gray-400">
                  <p className="text-sm leading-6 font-bold">Email:</p>
                  <p className="text-sm">Nilee.m.chy@gmail.com</p>
                </li>
                <li className="flex justify-between items-center py-4 border-b-[0.25px] border-gray-400">
                  <p className="text-sm leading-6 font-bold">Lead Source:</p>
                  <p className="text-sm">WIZIO+</p>
                </li>
                <li className="flex justify-between items-center py-4 border-b-[0.25px] border-gray-400">
                  <p className="text-sm leading-6 font-bold">Lead Statue:</p>
                  <p className="text-sm">Active</p>
                </li>
                <li className="flex justify-between items-center py-4 border-b-[0.25px] border-gray-400">
                  <p className="text-sm leading-6 font-bold">Last Contacted:</p>
                  <p className="text-sm">21 Dec 2024</p>
                </li>
                <li className="flex justify-between items-center py-4 border-b-[0.25px] border-gray-400">
                  <p className="text-sm leading-6 font-bold">Last Activity:</p>
                  <p className="text-sm">25 Dec 2024</p>
                </li>
              </ul>
            </div>
          </div>

          {/* Projects List */}
          <div className="w-full bg-white bg-opacity-75 rounded-[40px] p-5">
            {/* Title */}
            <div className="w-full rounded-[40px] max-md:max-w-full">
              <div className="flex justify-start items-center gap-5">
                <h4 className="leading-10 font-bold text-4xl">Projects</h4>
                <EditIcon className={"w-6 h-6 max-md:w-5 max-md:h-5 max-sm:w-4 max-sm:h-4 stroke-black fill-none"} />
              </div>
            </div>
            {/* List */}
            <ul className="flex flex-col gap-5 mt-5">
              <li className="flex justify-start items-center gap-3">
                <img src={project_a} alt="project_a" />
                <div>
                  <h5 className="text-xl leading-7 font-bold">Project A</h5>
                  <p className="text-sm">Paphos</p>
                </div>
              </li>
              <li className="flex justify-start items-center gap-3">
                <img src={project_b} alt="project_b" />
                <div>
                  <h5 className="text-xl leading-7 font-bold">Project B</h5>
                  <p className="text-sm">Paphos</p>
                </div>
              </li>
              <li className="flex justify-start items-center gap-3">
                <img src={project_c} alt="project_c" />
                <div>
                  <h5 className="text-xl leading-7 font-bold">Project C</h5>
                  <p className="text-sm">Paphos</p>
                </div>
              </li>
              <li className="flex justify-start items-center gap-3">
                <img src={project_d} alt="project_d" />
                <div>
                  <h5 className="text-xl leading-7 font-bold">Project D</h5>
                  <p className="text-sm">Paphos</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* Activity and Notes Side */}
        <div className="col-span-8 w-full h-full max-w-full min-h-full max-md:col-span-full">
          <div className="w-full bg-white bg-opacity-75 rounded-[40px] p-5 flex flex-col gap-5">
            {/* Title */}
            <div className="flex justify-start items-center gap-5">
              <p className="text-4xl font-bold leading-10 text-black underline underline-offset-8">Activities</p>
              <p className="text-4xl font-regular leading-10 text-gray-400">Notes</p>
            </div>
            {/* Timeline Title */}
            <div className="p-2.5">
              <p className="text-xl leading-7">Activities</p>
            </div>
            {/* Timeline */}
            <div className="relative my-2">
              <ul className=" w-full flex flex-col gap-12 before:h-full before:w-[3px] before:bg-gray-600 before:absolute before:left-[18px] ">
                <li className="flex justify-start items-center gap-4">
                  <div className="w-5 h-5 bg-gray-600 rounded-full m-2.5"></div>
                  <div className="w-full">
                    <div className="flex justify-between items-center">
                      <p className="leading-3 max-md:leading-5">Client Added Unit to Favourite</p>
                      <p className="text-sm text-gray-600 leading-3">13 Mar 2024</p>
                    </div>
                    <div className="bg-gray-400 h-px w-full my-1.5"></div>
                    <p className="leading-3 max-md:leading-5">Through website</p>
                  </div>
                </li>

                <li className="flex justify-start items-center gap-4">
                  <div className="w-5 h-5 bg-gray-600 rounded-full m-2.5"></div>
                  <div className="w-full">
                    <div className="flex justify-between items-center">
                      <p className="leading-3 max-md:leading-5">Unit 101 Shown to the clinet </p>
                      <p className="text-sm text-gray-600 leading-3">13 Mar 2024</p>
                    </div>
                    <div className="bg-gray-400 h-px w-full my-1.5"></div>
                    <p className="leading-3 max-md:leading-5">By Sales Rep John Winton</p>
                  </div>
                </li>

                <li className="flex justify-start items-center gap-4">
                  <div className="w-5 h-5 bg-gray-600 rounded-full m-2.5"></div>
                  <div className="w-full">
                    <div className="flex justify-between items-center">
                      <p className="leading-3 max-md:leading-5">Online Presentation</p>
                      <p className="text-sm text-gray-600 leading-3">13 Mar 2024</p>
                    </div>
                    <div className="bg-gray-400 h-px w-full my-1.5"></div>
                    <p className="leading-3 max-md:leading-5">By Sales Rep John Winton</p>
                  </div>
                </li>

                <li className="flex justify-start items-center gap-4">
                  <div className="w-5 h-5 bg-gray-600 rounded-full m-2.5"></div>
                  <div className="w-full">
                    <div className="flex justify-between items-center">
                      <p className="leading-3 max-md:leading-5">Unit 305 shown from Sales office</p>
                      <p className="text-sm text-gray-600 leading-3">13 Mar 2024</p>
                    </div>
                    <div className="bg-gray-400 h-px w-full my-1.5"></div>
                    <p className="leading-3 max-md:leading-5">Through website</p>
                  </div>
                </li>

                <li className="flex justify-start items-center gap-4">
                  <div className="w-5 h-5 bg-gray-600 rounded-full m-2.5"></div>
                  <div className="w-full">
                    <div className="flex justify-between items-center">
                      <p className="leading-3 max-md:leading-5">Unit added to Favourite</p>
                      <p className="text-sm text-gray-600 leading-3">13 Mar 2024</p>
                    </div>
                    <div className="bg-gray-400 h-px w-full my-1.5"></div>
                    <p className="leading-3 max-md:leading-5">Through website</p>
                  </div>
                </li>

                <li className="flex justify-start items-center gap-4">
                  <div className="w-5 h-5 bg-gray-600 rounded-full m-2.5"></div>
                  <div className="w-full">
                    <div className="flex justify-between items-center">
                      <p className="leading-3 max-md:leading-5">Unit 304 viewed from website</p>
                      <p className="text-sm text-gray-600 leading-3">13 Mar 2024</p>
                    </div>
                    <div className="bg-gray-400 h-px w-full my-1.5"></div>
                    <p className="leading-3 max-md:leading-5">By the client</p>
                  </div>
                </li>

                <li className="flex justify-start items-center gap-4">
                  <div className="w-5 h-5 bg-gray-600 rounded-full m-2.5"></div>
                  <div className="w-full">
                    <div className="flex justify-between items-center">
                      <p className="leading-3 max-md:leading-5">Note to the client added </p>
                      <p className="text-sm text-gray-600 leading-3">13 Mar 2024</p>
                    </div>
                    <div className="bg-gray-400 h-px w-full my-1.5"></div>
                    <p className="leading-3 max-md:leading-5">By the sales rep Eric Young</p>
                  </div>
                </li>
              </ul>
            </div>
            <button className="py-2.5 text-center w-full leading-6">View All Activities</button>
          </div>
        </div>
      </div>

      {/* Clients and Presentations Containers */}
      <div className="grid grid-cols-12 gap-5 mt-5">
        {/* Clients Container */}
        <div className="col-span-7 relative p-6 bg-white bg-opacity-75 rounded-[40px] min-h-[688px] max-md:col-span-full">
          <div className="flex justify-start items-center gap-5">
            <h3 className="text-4xl leading-10 font-bold max-md:text-2xl max-sm:text-xl">Clients</h3>
            <PlusIcon className={"w-6 h-6 fill-black"} />
          </div>

          <div className="text-center absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-full">
            <h3 className="text-4xl leading-10 font-bold max-md:text-2xl max-sm:text-xl">Advanced Table</h3>
            <p className="leading-8 text-2xl max-md:text-xl max-sm:text-base">WIZIO Team will sort this out</p>
          </div>
        </div>
        {/* Presentations Containers */}
        <div className="col-span-5 relative p-6 bg-white bg-opacity-75 rounded-[40px] min-h-[688px] max-md:col-span-full">
          <div className="flex justify-start items-center gap-5">
            <h3 className="text-4xl leading-10 font-bold max-md:text-2xl max-sm:text-xl">Presentations</h3>
            <PlusIcon className={"w-6 h-6 fill-black"} />
          </div>

          <div className="text-center absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-full">
            <h3 className="text-4xl leading-10 font-bold max-md:text-2xl max-sm:text-xl">Advanced Table</h3>
            <p className="leading-8 text-2xl max-md:text-xl max-sm:text-base">WIZIO Team will sort this out</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesRepPage;
