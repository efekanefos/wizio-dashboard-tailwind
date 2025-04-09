import React from "react";
import ProjectLogo from "../../svg/ProjectLogo";
import CloseIcon from "../../svg/CloseIcon";
import PlusIcon from "../../svg/PlusIcon";
import MinusIcon from "../../svg/MinusIcon";

const AddDetailsWithExtraButttons = () => {
  return (
    <div className="bg-[#E5E7EB] h-screen ">
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
        <div className="flex flex-col justify-center items-center w-full max-w-lg mx-auto h-screen">
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
            {/* Row #4 */}
            <div className="flex justify-between items-center py-5 border-b-[0.25px] border-black">
              <p className="leading-6 text-black">Garden (sqm)</p>
              <div className="flex justify-center items-center gap-4">
                <button className="w-7 h-7 flex justify-center items-center rounded-full border-[0.25px] border-black">
                  <MinusIcon className={"w-3 h-3 stroke-black fill-black"} />
                </button>
                <div className="w-7 h-7 flex justify-center items-center">
                  <p className="text-2xl text-black leading-8">12</p>
                </div>
                <button className="w-7 h-7 flex justify-center items-center rounded-full border-[0.25px] border-black">
                  <PlusIcon className={"w-3 h-3 stroke-black fill-black"} />
                </button>
              </div>
            </div>
            {/* Row #5 */}
            <div className="flex justify-between items-center py-5 border-b-[0.25px] border-black">
              <p className="leading-6 text-black">Car Park</p>
              <div className="flex justify-center items-center gap-4">
                <button className="w-7 h-7 flex justify-center items-center rounded-full border-[0.25px] border-black">
                  <MinusIcon className={"w-3 h-3 stroke-black fill-black"} />
                </button>
                <div className="w-7 h-7 flex justify-center items-center">
                  <p className="text-2xl text-black leading-8">1</p>
                </div>
                <button className="w-7 h-7 flex justify-center items-center rounded-full border-[0.25px] border-black">
                  <PlusIcon className={"w-3 h-3 stroke-black fill-black"} />
                </button>
              </div>
            </div>
          </div>
          <button className="text-white bg-black w-fit py-0.5 px-4 rounded-full mt-5">Add features</button>
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
            <button className="outline-none border-[0.5px] border-black rounded-full py-1.5 px-6">Back</button>
            <button className="outline-none border-[0.5px] border-black rounded-full py-1.5 px-6">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDetailsWithExtraButttons;
