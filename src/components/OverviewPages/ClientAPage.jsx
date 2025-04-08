import React from "react";
import ProjectLogo from "../../svg/ProjectLogo";
import DarkModeIcon from "../../svg/DarkModeIcon";
import GlobalIcon from "../../svg/GlobalIcon";
import NotificationIcon from "../../svg/NotificationIcon";
import UserIcon from "../../svg/UserIcon";
import PortalIcon from "../../svg/PortalIcon";
import FileUploadIcon from "../../svg/FileUploadIcon";
import MobileHamburgerIcon from "../../svg/MobileHamburgerIcon";
import CallIcon from "../../svg/CallIcon";
import EmailIcon from "../../svg/EmailIcon";
import FavouriteIcon from "../../svg/FavouriteIcon";
import EditIcon from "../../svg/EditIcon";
import jonathan_moss from "../../svg/jonathan_moss.png";
import jon_winton from "../../svg/jon_winton.png";
import eric_young from "../../svg/eric_young.png";
import rebecca_harper from "../../svg/rebecca_harper.png";
import price_range_graph from "../../svg/price_range_graph.png";
import PlusIcon from "../../svg/PlusIcon";

const ClientAPage = () => {
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
        <h3 className="text-4xl font-bold leading-10 max-md:text-2xl">Clients</h3>

        <div className="flex justify-start items-center gap-5">
          <button className="outline-none border-[0.5px] border-black rounded-full py-0.5 px-4 text-base leading-6">Date</button>
          <button className="w-9 h-9 flex justify-center items-center outline-none border-[0.5px] border-black rounded-full">
            <FileUploadIcon className={"w-6 h-6 max-md:w-5 max-md:h-5 max-sm:w-4 max-sm:h-4 stroke-black stroke-[1.5px] fill-none"} />
          </button>
        </div>
      </div>
      {/* Client Data */}
      <div className="mt-20 flex justify-start items-center gap-12 max-md:gap-6 max-sm:gap-3">
        <div className="w-36 h-36 rounded-full bg-gray-400 flex justify-center items-center max-md:w-24 max-md:h-24">
          <UserIcon className="w-12 h-12 fill-black" />
        </div>

        <div className="border-r-2 pr-12 border-black max-md:pr-6 max-sm:pr-3">
          <h2 className="text-5xl leading-10 font-bold max-md:text-4xl max-sm:text-2xl">Nilee M. Chy</h2>
          <div className="flex justify-start items-center gap-3 mt-3 max-md:mt-0">
            <p className="text-xl leading-4 max-md:text-xl max-sm:text-base">Investor</p>
            <div className="w-5 h-5 rounded-full bg-lime-500"></div>
          </div>
          <div className="flex justify-start items-start gap-12 mt-6 max-md:gap-8">
            <div className="flex flex-col gap-2 items-center max-md:gap-1">
              <CallIcon className="w-8 h-8 max-md:w-6 max-md:h-6 max-sm:w-5 max-sm:h-5 stroke-black stroke-2 fill-none" />
              <p className="text-xl leading-7 max-md:text-base">Call</p>
            </div>

            <div className="flex flex-col gap-2 items-center max-md:gap-1">
              <EmailIcon className="w-8 h-8 max-md:w-6 max-md:h-6 max-sm:w-5 max-sm:h-5 stroke-black" />
              <p className="text-xl leading-7 max-md:text-base">Email</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div>
            <h2 className="text-5xl leading-10 font-bold max-md:text-4xl max-sm:text-2xl">10</h2>
            <p className="text-xl leading-4 mt-3 max-md:mt-0 max-sm:text-base">Presentation</p>
          </div>
          <div>
            <div className="flex justify-start items-start gap-1">
              <h2 className="text-5xl leading-10 font-bold max-md:text-4xl max-sm:text-2xl">3</h2>
              <FavouriteIcon className="w-6 h-6 max-md:w-5 max-md:h-5 max-sm:w-4 max-sm:h-4 fill-red-500 mt-1" />
            </div>
            <p className="text-xl leading-4 mt-3 max-md:mt-0 max-sm:text-base">Favourites</p>
          </div>
        </div>
      </div>
      {/* Client Details Container */}
      <div className="grid grid-cols-12 gap-5 mt-20 max-md:grid-cols-full">
        {/* Details Side */}
        <div className="col-span-4 w-full flex flex-col gap-5 max-md:col-span-full">
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

          {/* Assigned to Window */}
          <div className="w-full bg-white bg-opacity-75 rounded-[40px] p-5">
            <div className="flex justify-start items-center gap-5">
              <h4 className="leading-10 font-bold text-4xl">Asigned to</h4>
              <EditIcon className={"w-6 h-6 max-md:w-5 max-md:h-5 max-sm:w-4 max-sm:h-4 stroke-black fill-none"} />
            </div>

            <div className="flex justify-start items-center gap-3 mt-5">
              <img src={jonathan_moss} alt="jonathan_moss" />

              <div>
                <h5 className="text-xl leading-7 font-bold">Jonathan Moss</h5>
                <p className="text-sm">Sales Rep</p>
              </div>
            </div>
          </div>

          {/* Assigned to Window */}
          <div className="w-full bg-white bg-opacity-75 rounded-[40px] p-5">
            <h4 className="leading-10 font-bold text-4xl">Preferences</h4>
            <div className="flex flex-col gap-6 mt-5">
              <div className="flex flex-col gap-1.5">
                <p className="text-sm font-bold leading-6">Buyer Type:</p>
                <p className="text-center border-[0.25px] border-black rounded-[32px] w-fit py-0.5 px-4">Investor</p>
              </div>

              <div className="flex flex-col gap-1.5">
                <p className="text-sm font-bold leading-6">Interested in:</p>
                <div className="flex justify-start items-center flex-wrap gap-2.5">
                  <p className="text-center border-[0.25px] border-black rounded-[32px] w-fit py-0.5 px-4">Project A</p>
                  <p className="text-center border-[0.25px] border-black rounded-[32px] w-fit py-0.5 px-4">Project D</p>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <p className="text-sm font-bold leading-6">Type Interest:</p>
                <div className="flex justify-start items-center flex-wrap gap-2.5">
                  <p className="text-center border-[0.25px] border-black rounded-[32px] w-fit py-0.5 px-4">Villa</p>
                  <p className="text-center border-[0.25px] border-black rounded-[32px] w-fit py-0.5 px-4">Town Houses</p>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <p className="text-sm font-bold leading-6">Size:</p>
                <div className="flex justify-start items-center flex-wrap gap-2.5">
                  <p className="text-center border-[0.25px] border-black rounded-[32px] w-fit py-0.5 px-4">2 Beds</p>
                  <p className="text-center border-[0.25px] border-black rounded-[32px] w-fit py-0.5 px-4">3 Beds</p>
                  <p className="text-center border-[0.25px] border-black rounded-[32px] w-fit py-0.5 px-4">4 Beds</p>
                  <p className="text-center border-[0.25px] border-black rounded-[32px] w-fit py-0.5 px-4">4 Beds</p>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <p className="text-sm font-bold leading-6">Price Range:</p>
                <div>
                  <img src={price_range_graph} alt="price_range_graph" />
                  <div className="flex justify-between items-center mt-2.5">
                    <p className="text-sm">€95K</p>
                    <p className="text-sm">€2.3M</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Activity and Notes Side */}

        <div className="col-span-8 w-full max-w-full max-md:col-span-full">
          <div className="bg-white bg-opacity-75 rounded-[40px] p-5">
            <div className="flex justify-start items-center gap-5">
              <p className="text-4xl font-regular leading-10 text-gray-600">Activities</p>
              <p className="text-4xl font-bold leading-10 text-black underline underline-offset-8">Notes</p>
            </div>

            <div className="mt-5 px-2.5 pt-3.5">
              <div className="flex justify-between items-center">
                <div className="flex justify-start items-center gap-2.5">
                  <p className="text-2xl leading-8">Notes</p>
                  <PlusIcon className="w-6 h-6 max-md:w-5 max-md:h-5 max-sm:w-4 max-sm:h-4 fill-black" />
                </div>
                <p className="leading-6">6 Notes</p>
              </div>
            </div>

            <div className="mt-5 p-2.5 flex justify-center items-center">
              <div className="w-full h-px bg-black"></div>
              <div className="text-center">
                <p className="text-base leading-6 px-4 w-max">Today</p>
              </div>
              <div className="w-full h-px bg-black"></div>
            </div>

            {/* Reviews */}
            <div className="flex flex-col gap-5">
              <div className="flex justify-start items-start gap-4">
                <img src={jon_winton} alt="jon_winton" />
                <div className="flex flex-col w-full">
                  <div className="flex justify-start items-center gap-3 border-b border-gray-400">
                    <p className="leading-6">Jon Winton</p>
                    <p className="text-sm text-gray-600">13 Mar 2024</p>
                  </div>
                  <p className="text-sm max-w-xl">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus..
                  </p>
                </div>
              </div>

              <div className="flex justify-start items-start gap-4">
                <img src={eric_young} alt="eric_young" />
                <div className="flex flex-col w-full">
                  <div className="flex justify-start items-center gap-3 border-b border-gray-400">
                    <p className="leading-6">Eric Young</p>
                    <p className="text-sm text-gray-600">13 Mar 2024</p>
                  </div>
                  <p className="text-sm max-w-xl">Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit.</p>
                </div>
              </div>
            </div>

            <div className="mt-5 p-2.5 flex justify-center items-center">
              <div className="w-full h-px bg-black"></div>
              <div className="text-center">
                <p className="text-base leading-6 px-4 w-max">06 Jan 2024</p>
              </div>
              <div className="w-full h-px bg-black"></div>
            </div>

            {/* Reviews */}
            <div className="flex flex-col gap-5">
              <div className="flex justify-start items-start gap-4">
                <img src={rebecca_harper} alt="rebecca_harper" />
                <div className="flex flex-col w-full">
                  <div className="flex justify-start items-center gap-3 border-b border-gray-400">
                    <p className="leading-6">Rebecca Harper</p>
                    <p className="text-sm text-gray-600">13 Mar 2024</p>
                  </div>
                  <p className="text-sm max-w-xl">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis
                    imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante.
                  </p>
                </div>
              </div>

              <div className="flex justify-start items-start gap-4">
                <img src={jon_winton} alt="jon_winton" />
                <div className="flex flex-col w-full">
                  <div className="flex justify-start items-center gap-3 border-b border-gray-400">
                    <p className="leading-6">Jon Winton</p>
                    <p className="text-sm text-gray-600">13 Mar 2024</p>
                  </div>
                  <p className="text-sm max-w-xl">Lorem ipsum dolor sit amet consectetur.</p>
                </div>
              </div>

              <div className="flex justify-start items-start gap-4">
                <img src={rebecca_harper} alt="rebecca_harper" />
                <div className="flex flex-col w-full">
                  <div className="flex justify-start items-center gap-3 border-b border-gray-400">
                    <p className="leading-6">Rebecca Harper </p>
                    <p className="text-sm text-gray-600">13 Mar 2024</p>
                  </div>
                  <p className="text-sm max-w-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. </p>
                </div>
              </div>
            </div>

            <button className="py-2.5 text-center w-full leading-6">View All Activities</button>
          </div>

          {/* Presentations Container */}
          <div className="relative p-6 bg-white bg-opacity-75 rounded-[40px] mt-5 min-h-[450px]">
            <h3 className="text-4xl leading-10 font-bold max-md:text-2xl max-sm:text-xl">Presentations</h3>

            <div className="text-center absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-full">
              <h3 className="text-4xl leading-10 font-bold max-md:text-2xl max-sm:text-xl">Advanced Table</h3>
              <p className="leading-8 text-2xl max-md:text-xl max-sm:text-base">WIZIO Team will sort this out</p>
            </div>
          </div>
        </div>
      </div>

      {/* Presentations Container */}
      <div className="relative p-6 bg-white bg-opacity-75 rounded-[40px] mt-5 min-h-[580px]">
        <h3 className="text-4xl leading-10 font-bold max-md:text-2xl max-sm:text-xl">Property Views</h3>

        <div className="text-center absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-full">
          <h3 className="text-4xl leading-10 font-bold max-md:text-2xl max-sm:text-xl">Advanced Table</h3>
          <p className="leading-8 text-2xl max-md:text-xl max-sm:text-base">WIZIO Team will sort this out</p>
        </div>
      </div>
    </div>
  );
};

export default ClientAPage;
