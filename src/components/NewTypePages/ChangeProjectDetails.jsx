import React from "react";
import ProjectLogo from "../../svg/ProjectLogo";
import CloseIcon from "../../svg/CloseIcon";
import FileUploadIcon from "../../svg/FileUploadIcon";

const ChangeProjectDetails = () => {
  const handleFileUpload = () => {
    const fileInput = document.getElementById("fileInput");
    if (fileInput) {
      fileInput.click();
    }
  };
  return (
    <div className="bg-[#E5E7EB] h-screen ">
      <div className="h-full flex flex-col justify-start items-center w-full p-12 max-xl:px-5 max-md:px-4 max-sm:px-3">
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
          <h3 className="font-bold text-4xl text-center">Change Project Details</h3>

          {/* Inputs */}
          <div className="flex flex-col gap-10 mt-5 w-full">
            <input value="Project A" readOnly className="text-black outline-none bg-transparent border border-gray-400 p-5 py-3.5 rounded-full w-full leading-3" type="text" />
            <div>
              <input value="50.721995598691436, -1.871064833848868" readOnly className="text-black outline-none bg-transparent border border-gray-400 p-5 py-3.5 rounded-full w-full leading-3" type="text" />
              <p className="text-gray-400 text-sm font-normal ml-5 mt-2">How to find project coordinates</p>
            </div>
          </div>

          {/* File Input */}
          <div onClick={handleFileUpload} className="w-full border-[0.5px] border-dashed border-gray-600 min-h-40 flex justify-center items-center rounded-[40px] my-5 cursor-pointer relative">
            <div className="text-center">
              <p className="text-gray-700">Please drop your project logo or thumbnail here or click to upload.</p>
              <div className="w-9 h-9 rounded-full border-[0.5px] border-gray-600 flex justify-center items-center mx-auto mt-5">
                <FileUploadIcon className={"w-6 h-6 max-md:w-5 max-md:h-5 max-sm:w-4 max-sm:h-4 stroke-gray-600 fill-none"} />
              </div>
              <p className="text-gray-700 text-sm absolute bottom-1 left-1/2 translate-x-[-50%]">Maximum file size: 5mb.</p>
            </div>
          </div>

          {/* Gizli Dosya Input */}
          <input id="fileInput" type="file" className="hidden" />
        </div>
      </div>
    </div>
  );
};

export default ChangeProjectDetails;
