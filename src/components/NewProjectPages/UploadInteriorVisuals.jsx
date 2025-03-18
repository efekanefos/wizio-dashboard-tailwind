import React from "react";
import ProjectLogo from "../../svg/ProjectLogo";
import FileUploadIcon from "../../svg/FileUploadIcon";
import CloseIcon from "../../svg/CloseIcon";
import MiniCloseIcon from "../../svg/MiniCloseIcon";
import livingroom_1 from "../../svg/livingroom_1.png";
import livingroom_2 from "../../svg/livingroom_2.png";
import livingroom_3 from "../../svg/livingroom_3.png";
import livingroom_4 from "../../svg/livingroom_4.png";
import livingroom_5 from "../../svg/livingroom_5.png";
import livingroom_6 from "../../svg/livingroom_6.png";
import livingroom_7 from "../../svg/livingroom_7.png";
import livingroom_8 from "../../svg/livingroom_8.png";

const UploadInteriorVisuals = () => {
  const handleFileUpload = () => {
    const fileInput = document.getElementById("fileInput");
    if (fileInput) {
      fileInput.click();
    }
  };
  return (
    <div className="bg-[#E5E7EB] h-screen max-lg:h-max">
      <div className="h-full flex flex-col justify-between items-center w-full max-w-[1024px] mx-auto p-12 max-xl:px-5 max-lg:gap-10 max-md:px-4 max-sm:px-3">
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
        <div className="flex flex-col justify-center items-center w-full  mx-auto">
          {/* Title */}
          <h3 className="font-bold text-4xl text-center">Upload Interior Visuals</h3>

          {/* File Input */}
          <div onClick={handleFileUpload} className="max-w-[632px] w-full border-[0.5px] border-dashed border-gray-600 min-h-40 flex justify-center items-center rounded-[40px] mt-5 cursor-pointer">
            <div className="text-center">
              <p className="text-gray-700">Drop files here or click to upload.</p>
              <div className="w-7 h-7 rounded-full border-[0.5px] border-gray-600 flex justify-center items-center mx-auto mt-5">
                <FileUploadIcon className={"w-4 h-4 stroke-gray-600 fill-none"} />
              </div>
            </div>
          </div>
          {/* Gizli Dosya Input */}
          <input id="fileInput" type="file" className="hidden" />

          {/* Room Images */}
          <div className="flex flex-wrap justify-center items-start gap-5 mt-5">
            <div className="flex flex-col min-w-[215px]">
              <div className="relative rounded-3xl overflow-hidden mb-3">
                <img src={livingroom_1} alt="livingroom" />
                <MiniCloseIcon className={"w-4 h-4 absolute top-3.5 right-3.5"} />
              </div>
              <p className="text-black text-base text-center">Living room-01</p>
            </div>

            <div className="flex flex-col min-w-[215px]">
              <div className="relative rounded-3xl overflow-hidden mb-3">
                <img src={livingroom_2} alt="livingroom" />
                <MiniCloseIcon className={"w-4 h-4 absolute top-3.5 right-3.5"} />
              </div>
              <p className="text-black text-base text-center">Living room-01</p>
            </div>

            <div className="flex flex-col min-w-[215px]">
              <div className="relative rounded-3xl overflow-hidden mb-3">
                <img src={livingroom_3} alt="livingroom" />
                <MiniCloseIcon className={"w-4 h-4 absolute top-3.5 right-3.5"} />
              </div>
              <p className="text-black text-base text-center">Living room-01</p>
            </div>

            <div className="flex flex-col min-w-[215px]">
              <div className="relative rounded-3xl overflow-hidden mb-3">
                <img src={livingroom_4} alt="livingroom" />
                <MiniCloseIcon className={"w-4 h-4 absolute top-3.5 right-3.5"} />
              </div>
              <p className="text-black text-base text-center">Living room-01</p>
            </div>

            <div className="flex flex-col min-w-[215px]">
              <div className="relative rounded-3xl overflow-hidden mb-3">
                <img src={livingroom_5} alt="livingroom" />
                <MiniCloseIcon className={"w-4 h-4 absolute top-3.5 right-3.5"} />
              </div>
              <p className="text-black text-base text-center">Living room-01</p>
            </div>

            <div className="flex flex-col min-w-[215px]">
              <div className="relative rounded-3xl overflow-hidden mb-3">
                <img src={livingroom_6} alt="livingroom" />
                <MiniCloseIcon className={"w-4 h-4 absolute top-3.5 right-3.5"} />
              </div>
              <p className="text-black text-base text-center">Living room-01</p>
            </div>

            <div className="flex flex-col min-w-[215px]">
              <div className="relative rounded-3xl overflow-hidden mb-3">
                <img src={livingroom_7} alt="livingroom" />
                <MiniCloseIcon className={"w-4 h-4 absolute top-3.5 right-3.5"} />
              </div>
              <p className="text-black text-base text-center">Living room-01</p>
            </div>

            <div className="flex flex-col min-w-[215px]">
              <div className="relative rounded-3xl overflow-hidden mb-3">
                <img src={livingroom_8} alt="livingroom" />
                <MiniCloseIcon className={"w-4 h-4 absolute top-3.5 right-3.5"} />
              </div>
              <p className="text-black text-base text-center">Living room-01</p>
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

export default UploadInteriorVisuals;
