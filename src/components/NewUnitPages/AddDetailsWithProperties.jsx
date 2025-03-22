import React from "react";
import ProjectLogo from "../../svg/ProjectLogo";
import CloseIcon from "../../svg/CloseIcon";
import PlusIcon from "../../svg/PlusIcon";
import MinusIcon from "../../svg/MinusIcon";
import GardenIcon from "../../svg/GardenIcon";
import BalconyIcon from "../../svg/BalconyIcon";
import TerraceIcon from "../../svg/TerraceIcon";
import GarageIcon from "../../svg/GarageIcon";
import DrivewayIcon from "../../svg/DrivewayIcon";
import ParkingIcon from "../../svg/ParkingIcon";
import PoolIcon from "../../svg/PoolIcon";
const AddDetailsWithProperties = () => {
  return (
    <div className="bg-[#E5E7EB] h-screen max-sm:h-full">
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
        <div className="flex flex-col justify-center items-center w-full max-w-[632px] mx-auto mt-3">
          {/* Title */}
          <h3 className="font-bold text-4xl text-center leading-10">Add Details</h3>

          {/* Rows */}

          <div className="w-full">
            {/* Row #1 */}
            <div className="flex justify-between items-center py-5 border-b-[0.25px] border-black">
              <p className="leading-6 text-black">Number of Bedrooms</p>
              <div className="flex justify-center items-center gap-4">
                <button className="w-7 h-7 flex justify-center items-center rounded-full border-[0.25px] border-black">
                  <MinusIcon className={"w-3 h-3 stroke-black fill-black"} />
                </button>
                <div className="w-7 h-7 flex justify-center items-center">
                  <p className="text-2xl text-black leading-8">3</p>
                </div>
                <button className="w-7 h-7 flex justify-center items-center rounded-full border-[0.25px] border-black">
                  <PlusIcon className={"w-3 h-3 stroke-black fill-black"} />
                </button>
              </div>
            </div>
            {/* Row #2 */}
            <div className="flex justify-between items-center py-5 border-b-[0.25px] border-black">
              <p className="leading-6 text-black">Number of Bathrooms</p>
              <div className="flex justify-center items-center gap-4">
                <button className="w-7 h-7 flex justify-center items-center rounded-full border-[0.25px] border-black">
                  <MinusIcon className={"w-3 h-3 stroke-black fill-black"} />
                </button>
                <div className="w-7 h-7 flex justify-center items-center">
                  <p className="text-2xl text-black leading-8">3</p>
                </div>
                <button className="w-7 h-7 flex justify-center items-center rounded-full border-[0.25px] border-black">
                  <PlusIcon className={"w-3 h-3 stroke-black fill-black"} />
                </button>
              </div>
            </div>
            {/* Row #3 */}
            <div className="flex justify-between items-center py-5 border-b-[0.25px] border-black">
              <p className="leading-6 text-black">Net Area (sqm)</p>
              <div className="flex justify-center items-center gap-4">
                <button className="w-7 h-7 flex justify-center items-center rounded-full border-[0.25px] border-black">
                  <MinusIcon className={"w-3 h-3 stroke-black fill-black"} />
                </button>
                <div className="w-7 h-7 flex justify-center items-center">
                  <p className="text-2xl text-black leading-8">90</p>
                </div>
                <button className="w-7 h-7 flex justify-center items-center rounded-full border-[0.25px] border-black">
                  <PlusIcon className={"w-3 h-3 stroke-black fill-black"} />
                </button>
              </div>
            </div>
          </div>
          <button className="text-white bg-black w-fit py-0.5 px-4 rounded-full mt-5">Add features</button>
          {/* Property Types */}
          <div className="flex flex-wrap justify-center items-center gap-4 w-full mt-5">
            <div className="w-48 h-28 flex flex-col justify-center items-center py-5 border-[0.5px] border-black rounded-3xl">
              <GardenIcon className={"w-6 h-6 stroke-gray-600 stroke-[1.5px] fill-none mx-auto"} />
              <p className="text-gray-600 text-center leading-6">Garden</p>
            </div>

            <div className="w-48 h-28 flex flex-col justify-center items-center py-5 border-[0.5px] border-black rounded-3xl">
              <BalconyIcon className={"w-6 h-6 stroke-gray-600 stroke-[1.5px] fill-none mx-auto"} />
              <p className="text-gray-600 text-center leading-6">Balcony</p>
            </div>

            <div className="w-48 h-28 flex flex-col justify-center items-center py-5 border-[0.5px] border-black rounded-3xl">
              <TerraceIcon className={"w-6 h-6 stroke-gray-600 stroke-[1.5px] fill-none mx-auto"} />
              <p className="text-gray-600 text-center leading-6">Terrace</p>
            </div>

            <div className="w-48 h-28 flex flex-col justify-center items-center py-5 border-[0.5px] border-black rounded-3xl">
              <GarageIcon className={"w-6 h-6 stroke-gray-600 stroke-[1.5px] fill-none mx-auto"} />
              <p className="text-gray-600 text-center leading-6">Garage</p>
            </div>

            <div className="w-48 h-28 flex flex-col justify-center items-center py-5 border-[0.5px] border-black rounded-3xl">
              <DrivewayIcon className={"w-6 h-6 stroke-gray-600 stroke-[1.5px] fill-none mx-auto"} />
              <p className="text-gray-600 text-center leading-6">Driveway</p>
            </div>

            <div className="w-48 h-28 flex flex-col justify-center items-center py-5 border-[0.5px] border-black rounded-3xl">
              <ParkingIcon className={"w-6 h-6 fill-gray-600 mx-auto"} />
              <p className="text-gray-600 text-center leading-6">Car Park</p>
            </div>

            <div className="w-48 h-28 flex flex-col justify-center items-center py-5 border-[0.5px] border-black rounded-3xl">
              <PoolIcon className={"w-6 h-6 fill-gray-600 mx-auto"} />
              <p className="text-gray-600 text-center leading-6">Pool</p>
            </div>

            <div className="w-48 h-28 flex flex-col justify-center items-center py-5 border-[0.5px] border-black rounded-3xl">
              <PlusIcon className={"w-6 h-6 fill-gray-600"} />
              <p className="text-gray-600 text-center leading-6">Add</p>
            </div>
          </div>
        </div>

        {/* Below Content */}
        <div className="w-full flex flex-col">
          <div className="flex justify-center items-center gap-2 w-full py-3">
            <div className="w-full h-1 bg-black"></div>
            <div className="w-full h-1 bg-black"></div>
            <div className="w-full h-1 bg-black"></div>
            <div className="w-full h-1 bg-white"></div>
            <div className="w-full h-1 bg-white"></div>
          </div>
          <div className="w-full flex justify-between items-center py-3">
            <button className="outline-none border-[0.5px] border-black rounded-full py-0.5 px-4">Back</button>
            <button className="outline-none border-[0.5px] border-black rounded-full py-0.5 px-4">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDetailsWithProperties;
